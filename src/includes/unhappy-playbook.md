## Specify the Playbook Trigger

Before we specify what our Playbook should _do_, we need to tell Abbot _when_ the Playbook should run.
To do that, we configure a "Trigger", which is a condition that must be met for the Playbook to run.

1. Click the "Add a trigger" button on the Playbook editor page to add a trigger.

    <img src="/public/images/articles/quick-start.playbooks/add-trigger-button.png">

2. In the "Add Trigger" dialog, type "Neg" to filter the list and click the "Negative Sentiment" trigger.

    <img src="/public/images/articles/quick-start.playbooks/add-trigger-neg-search.png">

3. **Optional** Select Segments to filter which customers this Playbook will run for. For now, we'll leave this blank so the Playbook will run for all customers.

    <img src="/public/images/articles/quick-start.playbooks/add-trigger-choose-segment.png">

The Playbook will now run whenever we detect a message with negative sentiment in any of your tracked rooms.
Next, we'll configure _what_ the Playbook should do.

## Add an Action

Actions are the steps taken by the Playbook when it runs.
There are lots of actions available, and we're adding more all the time.
For now, we'll just add a simple action to send a message to notify our team in the default [Hub](xref:conversation-management.hubs).

1. Click the "Add an Action" button to add an action to the Playbook.

    <img src="/public/images/articles/quick-start.playbooks/add-action-button.png">

2. Search the "Add Action" dialog for the "Notify Responders" step and click it.

    <img src="/public/images/articles/quick-start.playbooks/add-action-notify-search.png">

3. In "Channel", select "Channel from trigger". This ensures we'll notify whatever Hub is attached to the customer that posted the negative message. In our case, that will be the default Hub, because we haven't configured any other Hubs yet.

    <img src="/public/images/articles/quick-start.playbooks/notify-responders-channel.png">

4. For the "Title", let's just put "Unhappy Customer". This message will be shown in bold at the top of the notification message.

    <img src="/public/images/articles/quick-start.playbooks/notify-responders-title.png">

5. For the "Message", we should include the name of the unhappy customer, so our team knows who to reach out to. If you type a <kbd>{</kbd>, you'll be able to select from a list of variables that are available to use in the message. Select `Customer name from trigger` to insert the customer's name into the message.

    <img src="/public/images/articles/quick-start.playbooks/notify-responders-message-customer-name-variable.png">

6. We can also include a link to the message that triggered the Playbook. This makes it easy for our team to jump right to the message and start responding. Type <kbd>{</kbd> again and select `Link to message from trigger` this time:

    <img src="/public/images/articles/quick-start.playbooks/notify-responders-message-link-message-variable.png">

7. Click "Save" to save the action.

    <img src="/public/images/articles/quick-start.playbooks/notify-responders-full-action.png">

8. The Playbook is ready to roll, but it's still a Draft. Any time you make changes to a Playbook, we save it as a Draft so you can review it before it goes live. Click "Publish Playbook" to publish the Playbook. It will immediately start running for any new messages that match the trigger.

    <img src="/public/images/articles/quick-start.playbooks/notify-responders-publish.png">

## Conclusion

Now that we've published the Playbook, it will run for any new messages that match the trigger.
If a customer posts a message that our AI detects as negative, the Playbook will run and send a notification to the default Hub:

<img src="/public/images/articles/quick-start.playbooks/negative-sentiment-notification.png">