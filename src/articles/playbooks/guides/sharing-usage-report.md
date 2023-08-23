---
uid: playbooks.guides.sharing-usage-report
---

# Sharing a Customer Usage Report

This is an advanced guide that demonstrates building a scheduled Playbook to share a usage report with your customers every week. This guide leverages Abbot's Skills functionality to pull data from an external source so that it can share information with your customers on a schedule.

Sharing a usage report with customers is a fantastic way to create proactive engagement, drive adoption, and show how your product creates values for your customers.

[!INCLUDE [create-playbook](../../../includes/create-playbook.md)]

> [!NOTE]
> You can <a href="/public/playbooks/playbook.customer-usage-report.json" download>download the playbook referenced in this guide</a> and [import it](xref:playbooks.import) in to your workspace.
> <div><a class="btn btn-secondary" href="https://app.ab.bot/playbooks/import#Input.Name=Customer%20Usage%20Report&Input.Description=Send%20a%20weekly%20usage%20report%20to%20every%20subscribed%20customer.&Input.DefinitionUrl=https://docs.ab.bot/public/playbooks/playbook.playbook.customer-usage-report.json" target="_blank"><i class="bi bi-cloud-upload"></i> Import directly into Abbot now</a></div>

[!INCLUDE [specify-trigger](../../../includes/specify-trigger.md)]

1. Click the "Add a trigger" button on the Playbook editor page to add a trigger.

    <img src="/public/images/articles/playbooks.guides.sharing-usage-report/playbook-builder-canvas.png">

2. In the "Add Trigger" dialog, type "Sche" to filter the list and click the "Scehdule" trigger.

    <img src="/public/images/articles/playbooks.guides.sharing-usage-report/add-trigger-panel.png">

3. Click on the Schedule trigger to select it. Click on the "Schedule" drop down and select "Weekly".

   <img src="/public/images/articles/playbooks.guides.sharing-usage-report/configure-schedule.png">

4. Now click on "M" to select Monday. In the screenshot below you can see we've scheduled the playbook to run every Monday at 9am in my timezone.

    <img src="/public/images/articles/playbooks.guides.sharing-usage-report/configure-schedule-day.png">

5. Click "Save" to save the step. Don't worry, nothing will happen until the Playbook is published.

[!INCLUDE [dispatching](../../../includes/dispatching.md)]

<img src="/public/images/articles/playbooks.guides.sharing-usage-report/dispatching.png">

## Add an Action

Actions are the steps taken by the Playbook when it runs. There are lots of actions available, and we're adding more all the time.

The first action we'll add is a filtering action to filter out Customers who do not have an associated channel.

> [!TIP]
> If you have a lot of Rooms in Abbot not associated with customers, you can [create customers for existing Slack Connect channels](xref:customers.bulk-create).

1. Click the "Add an action" button to add an action to the Playbook. Filter the list to find the "Continue If" step. Click on the step to add and configure it.

    <img src="/public/images/articles/playbooks.guides.sharing-usage-report/continue-if-step.png">

2. Select the "Channel from Trigger" condition and the "Exists" comparison. This ensures the playbook will only continue if the customer the playbook is running for has an associated channel. Click "Save" to save this step.

    > [!NOTE]
    > If you don't see any options, make sure "Run once for each customer" is selected in the dispatch options.

    <img src="/public/images/articles/playbooks.guides.sharing-usage-report/playbook-with-two-steps.png">

## Gather Stats for the Report

Before we add the next step in the Playbook, we need a way to gather your customer usage stats so that we can have the Playbook send them.

To do that, we need to run a skill. A skill in Abbot is a way to run custom code that we host from chat or from a Playbook. So the first step is to write a skill that calls out to an API you control to get these stats. To create a skill, click on "Skills" in the left navigation (you might need an Administrator to enable skills first) and click "Create new skill". In this example, we'll create a C# skill. To jump to the create page, [click here](https://app.ab.bot/skills/create/csharp). Give the skill a name, click "Create Skill", and then enter the following code in the Skill editor:

```csharp
if (Bot.Arguments is [{ Value: { } customerIdText}]
    && int.TryParse(customerIdText, out var customerId)) {
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
    var report = $"""
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

## Send the report

Now we'll add the last step to send the report to your customers. 

1. Click "Add an action" and select the "Send Message" action.

2. For the "Channel or Thread" select "Channel from Trigger". This is the channel associated with the customer.

3. In the body of the message we need to access the report that you added to `Bot.Outputs` in the skill. Once again, we'll use a Handlebars expression. Type `{` in the editor and you'll see a set of options. Since we created this output, we'll need to type in a custom expression. Type in `outputs.report` and hit the `TAB` key to complete it. You should see `{{ outputs.report }}` as the body of the message.

4. Save the step and click the "Publish" button you're done!

## Test it

The best way to test the report without actually sending it to your customers is to temporarily replace the Schedule trigger with a "Run Playbook Button" trigger. Make sure the dispatch options are the same as before. Then change the channel in the last step, "Send Message", to a channel that is NOT shared with customers. It'll look something like the following:

<img src="/public/images/articles/playbooks.guides.sharing-usage-report/manual-trigger.png">

You should now see a "Run Now" button. Click it and the playbook will run for each customer and post a message in the channel you specified. Once you're satisfied with the results, replace the "Run Playbook Button" with the "Schedule" (making sure to set the Dispatch options again) and change the last action to send to the "Channel from Trigger". We're working to improve the testing process to make this easier.
