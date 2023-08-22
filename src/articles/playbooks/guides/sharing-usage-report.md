---
uid: playbooks.guides.sharing-usage-report
---

# Sharing a Customer Usage Report

This is an advanced guide that demonstrates building a scheduled Playbook to share a usage report with your customers every week. This guide leverages Abbot's Skills functionality to pull data from an external source so that it can share information with your customers on a schedule.

Sharing a usage report with customers is a fantastic way to create proactive engagement, drive adoption, and show how your product creates values for your customers.

## Create the Playbook

As with every guide, start by going to the [Playbooks page](https://app.ab.bot/playbooks) and click [Create](https://app.ab.bot/playbooks/create) to create a Playbook. Give it a name and description and click "Create Playbook" and you'll end up on the Playbook Builder canvas.

<img src="/public/images/articles/playbooks.guides.sharing-usage-report/playbook-builder-canvas.png">

## Add a Trigger

The first step is to add a Schedule trigger. Click "Add a trigger" on the canvas to bring up the "Add Triggers" panel. From there you can type "Schedule" in the filter to find the "Schedule Trigger".

<img src="/public/images/articles/playbooks.guides.sharing-usage-report/add-trigger-panel.png">

Click on the Schedule trigger to choose and configure it. In the screenshot below we're sticking with the defaults to run this daily at midnight in my timezone.

<img src="/public/images/articles/playbooks.guides.sharing-usage-report/configure-schedule.png">

Click "Save" to save the step. Don't worry, nothing will happen until we publish the Playbook.

After adding the trigger, you'll notice a Dispatching option. Select "Run once for each customer". This provides the option run this playbook for a specific set of customer segments. For more about setting up customers and customer segments, visit [customers setup](../../customers/setup.md). In the screenshot below you can see this Playbook will only send the report to our esteemed Business and Enterprise customers.

<img src="/public/images/articles/playbooks.guides.sharing-usage-report/dispatching.png">

## Filtering Out Customers Without Rooms

This Playbook relies on having set up customers in Abbot and associating them with a Room (Slack channel). We want to filter out customers who do not have a channel associated with them.

> [!TIP]
> If you have a lot of Rooms in Abbot not associated with customers, visit the [Create Customers for Rooms](https://app.ab.bot/settings/rooms/createcustomers) page. You'll see a list of all customers without rooms and have the option to create customer records for each room.

To do so, we'll add a "Continue If" step. Click "Add an action" and then filter the list to find the "Continue If" step. Click on the step to add and configure it.

<img src="/public/images/articles/playbooks.guides.sharing-usage-report/continue-if-step.png">

Select the "Channel from Trigger" condition and the "Exists" comparison. This ensurse the playbook will only continue if the customer the playbook is running for has an associated channel.

> [!NOTE]
> If you don't see any options, make sure "Run once for each customer" is selected in the dispatch options.

<img src="/public/images/articles/playbooks.guides.sharing-usage-report/playbook-with-two-steps.png">

## Gather Stats for the Report

In this step, we need to gather your customer usage stats to send in the report. To do that, we need to run a skill. So the first step is to write a skill that calls out to an API you control to get these stats. To create a skill, click on "Skills" in the left navigation and click "Create new skill". In this example, we'll create a C# skill. To jump to the create page, [click here](https://app.ab.bot/skills/create/csharp). Give the skill a name, click "Create Skill", and then enter the following code in the Skill editor:

```csharp
if (Bot.Arguments is [{ Value: { } customerIdText}] && int.TryParse(customerIdText, out var customerId)) {
    var response = await Bot.Customers.GetAsync(customerId);
    if (response.Body is not { } customer) {
        if (!Bot.IsPlaybook) {
            await Bot.ReplyAsync($"No customer with id `{customerId}` exists.");
        }
        return;
    }
    
    if (customer.Metadata.TryGetValue("OurCustomerId", out var ourCustomerId)) {
        if (!Bot.IsPlaybook) {
            await Bot.ReplyAsync("Customer does not have an Id associated with usage stats in our system.");
            return;
        }
    }
    
    // TODO: Replace this line with your own API.
    var data = await Bot.Http.GetJsonAsAsync<MyUsageStats>(new Uri($"https://example.com/?customer={ourCustomerId}"));
    var report =  $"""
                    Hello {customer.Name}
                    *{data.Count}* New Sales!

                    _This message was sent from a Playbook. Let us know if you’d like to opt out!_
                    """;
    // This output will be available to subsequent steps.
    Bot.Outputs.Add("report", report);
    if (!Bot.IsPlaybook) {
        await Bot.ReplyAsync(report);
    }
}

public record MyUsageStats(long Count);
```

Make sure to change the line in there to call your own API. If you just want to just test this out, remove the line where the data is retrieved and the line where it's put in the message and save the skill.

With this skill in place, go back to the Playbook, click "Add a step" and select "Run a skill". Select the skill you created and for the arguments pass this a Handlebars template: `{{outputs.customer.id}}`. This resolves to the Id of the customer when the playbook runs this skill. The channel you choose here doesn't really matter, but it should be one that's NOT shared with your customers. Save the step and your Playbook should look something like:

<img src="/public/images/articles/playbooks.guides.sharing-usage-report/run-skill-step.png">

## Send the report!

Now we'll add the last step to send the report to your customers. Click "Add an action" and select the "Send Message" action. For the "Channel or Thread" select "Channel from Trigger". This is the channel associated with the customer. In the body of the message we need to access the report that you added to `Bot.Outputs` in the skill. Once again, we'll use a Handlebars expression. Type `{` in the editor and you'll see a set of options. Since we created this output, we'll need to type in a custom expression. Type in `outputs.report` and hit the `TAB` key to complete it. You should see `{{ outputs.report }}` as the body of the message.

Save the step and you're done!

## Test it

The best way to test the report without actually sending it to your customers is to temporarily replace the Schedule trigger with a "Run Playbook Button" trigger. Make sure the dispatch options are the same as before. Then change the channel in the last step, "Send Message", to a channel that is NOT shared with customers. It'll look something like the following:

<img src="/public/images/articles/playbooks.guides.sharing-usage-report/manual-trigger.png">

You should now see a "Run Now" button. Click it and the playbook will run for each customer and post a message in the channel you specified. Once you're satisfied with the results, replace the "Run Playbook Button" with the "Schedule" (making sure to set the Dispatch options again) and change the last action to send to the "Channel from Trigger". We're working to improve the testing process to make this easier.
