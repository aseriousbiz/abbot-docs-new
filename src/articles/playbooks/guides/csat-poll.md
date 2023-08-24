---
uid: playbooks.guides.csat-poll
---

# Collect Customer Satisfaction (CSAT) in Slack

In today's remote world, understanding your customers is more important than ever. One metric that's rapidly becoming the gold standard for gauging customer sentiment is CSAT, or Customer Satisfaction Score. This simple yet powerful tool provides businesses with a snapshot of how satisfied customers are with their products, services, or a particular interaction. Capturing CSAT after customer interactions provides a number of benefits:

- **Immediate Insights:** CSAT offers real-time feedback, allowing businesses to swiftly address customer concerns and enhance their experience.
- **Boost Customer Retention:** A satisfied customer is more likely to remain loyal, thereby ensuring consistent revenue streams.
Upsell and Cross-sell Opportunities: By understanding a customer's usage patterns and needs, there may be opportunities to introduce them to additional features or services that can provide them with even more value.
- **Financial Implications:** There's a strong correlation between customer satisfaction and financial outcomes. Satisfied customers tend to buy more, are less price-sensitive, and are less expensive to serve due to fewer returns and complaints.
- **Enhance Word-of-Mouth Marketing:** High satisfaction scores can amplify positive brand promotion, a crucial factor in the era of social media.

Abbot makes it easy to collect CSAT from your customers using Playbooks. This guide will show you how:

[!INCLUDE [create-playbook](../../../includes/create-playbook.md)]

> [!NOTE]
> You can <a href="/public/playbooks/playbook.csat-poll.json" download>download the playbook referenced in this guide</a> and [import it](xref:playbooks.import) in to your workspace.
> <div><a class="btn btn-secondary" href="https://app.ab.bot/playbooks/import#Input.Name=CSAT%20Poll&Input.Description=Send%20a%20monthly%20CSAT%20poll%20to%20every%20subscribed%20customer.&Input.DefinitionUrl=https://docs.ab.bot/public/playbooks/playbook.csat-poll.json" target="_blank"><i class="bi bi-cloud-upload"></i> Import directly into Abbot now</a></div>

[!INCLUDE [specify-trigger](../../../includes/specify-trigger.md)]

1. Click the "Add a trigger" button on the Playbook editor page to add a trigger.

    <img src="/public/images/articles/quick-start.playbooks/add-trigger-button.png">

2. In the "Add Trigger" dialog, type "Ticket" to filter the list and click the "Zendesk Ticket Status Change" trigger.

    <img src="/public/images/articles/playbooks.guides.csat-poll/trigger-ticket.png">

    > [!NOTE]
    > Not using Zendesk?
    > Let us know what else we should support at [help@ab.bot](mailto:help@ab.bot) or in Slack Connect!

3. The "Customer segments" dropdown can limit updates to specific sets of customers.

   <img src="/public/images/articles/playbooks.guides.csat-poll/trigger-zendesk-status.png">

4. Click "Save" to save the step. Don't worry, nothing will happen until the Playbook is published.

## Add an Action

Actions are the steps taken by the Playbook when it runs. There are lots of actions available, and we're adding more all the time.

The first action we'll add is a filtering action to filter out all but Solved tickets.

1. Click the "Add an action" button to add an action to the Playbook. Filter the list to find the "Continue If" step. Click on the step to add and configure it.

    <img src="/public/images/articles/playbooks.guides.csat-poll/continue-if-step.png">

2. Select the "Status of Zendesk ticket from trigger" condition, the "Is One Of" comparison, and select "Solved" as the status to match. This ensures the playbook will only continue if the ticket changed to the Solved status. Click "Save" to save this step.

## Send the Customer Satisfaction Poll

Now we'll add a step to send the Poll in Slack.

1. Click "Add an action" and select the "Send Slack Poll" action.

2. For "Channel or Thread" select "Reply to thread from trigger". This is the Slack thread linked to the Zendesk ticket.

3. The default "Poll Options" selection is "Customer Satisfaction", which asks the user to select from a five-option Likert scale ranging from "Very satisfied" to "Very unsatisfied". Other options include a "Likelihood" Likert scale and simple "Yes or No".

    > [!NOTE]
    > Do you need other common, or custom, poll options?
    > Let us know what else we should support at [help@ab.bot](mailto:help@ab.bot) or in Slack Connect!

4. Enter a "Poll Question" that aligns with the selected "Poll Options".

    <img src="/public/images/articles/playbooks.guides.csat-poll/slack-poll-step.png">

## Handle Poll Responses

Now we need to decide how to respond to different poll responses.

1. Click "Add an action" again and select the "If" action.

    > [!NOTE]
    > Unlike "Continue If", this action also allows specifying what to do if the condition _isn't_ satisfied.

2. For "Condition" select "Last poll response", which should choose "Is Any Of" as the "Comparison".

3. For the right side of the comparison select one or more response values, e.g. "Unsatisfied" and "Very unsatisfied".

    <img src="/public/images/articles/playbooks.guides.csat-poll/if-unsatisfied-step.png">

4. Save the step so we can add steps to the match and non-match branches.

## If true, run these steps&hellip;

The left branch under the "If" specifies what to do if the condition is true.
Let's notify our [First Responders](xref:conversation-management.frs) about the dissatisfied customer interaction.

1. Click the "+" under "If true&hellip;" and select the "Notify Responders" action.

2. For "Channel" select "Channel from trigger". Since First Responders can be configured per Channel this will notify the responders responsible for this thread.

3. For "Title" let's use "🚨 Dissatisfied customer alert". To insert the Emoji we can type <kbd>:rot</kbd> to bring up suggestions.

    <img src="/public/images/articles/playbooks.guides.csat-poll/title-emoji.png">

4. In the body of the message we can access expressions from earlier in the Playbook, including the name of the customer and links to the Zendesk ticket and its corresponding Slack thread. Typing <kbd>{</kbd> brings up a list of available expressions that filters as you type. Use what's available to craft the desired message for your First Responders.

    <img src="/public/images/articles/playbooks.guides.csat-poll/message-expression.png">

5. Save the step so we can add steps to the non-match branch.

## If false, run these steps&hellip;

The right branch under the "If" specifies what to do if the condition is false.
Let's thank our customer for their feedback and make sure additional steps that might be added to the Playbook won't run.

1. Click the "+" under "If false&hellpi;" and select the "Send Message" action.

2. For "Channel or Thread" select "Reply to thread from trigger".

3. Compose your message to the customer and Save the step.

4. Finally, click the "+" under that new step and select the "Complete Playbook" action. This will allow additional steps to be added after the "If" that only run for unsatisfied customers.

The completed "If" step should look something like this:

<img src="/public/images/articles/playbooks.guides.csat-poll/if-complete.png">

The Playbook is ready to roll, but it's still a Draft. Any time you make changes to a Playbook, we save it as a Draft so you can review it before it goes live. Click "Publish Playbook" to publish the Playbook.

## Conclusion

Now that we've published the Playbook, it will immediately start running for any new Zendesk ticket status changes that match the trigger. Once Solved we'll post a Poll to the ticket thread:

<img src="/public/images/articles/playbooks.guides.csat-poll/poll-prompt.png">

If the response is unsatisfied, the Playbook will notify responders.

<img src="/public/images/articles/playbooks.guides.csat-poll/poll-result-dissatisfied.png">

Otherwise, the Playbook sends the customer your thanks.

<img src="/public/images/articles/playbooks.guides.csat-poll/poll-result-satisfied.png">
