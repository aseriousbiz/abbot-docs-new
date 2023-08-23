---
uid: playbooks.guides.approval-workflow
---

# Playbook Guide: Discount Code Approval

This playbook guide shows you how to build a Playbook to request approval from your team before taking an automated step. In this case, the automated step is to send an unhappy customer a discount code.

[!INCLUDE [create-playbook](../../../includes/create-playbook.md)]

> [!NOTE]
> You can <a href="/public/playbooks/playbook.approval-workflow.json" download>download the playbook referenced in this guide</a> and [import it](xref:playbooks.import) in to your workspace.
> <div><a class="btn btn-secondary" href="https://app.ab.bot/playbooks/import#Input.Name=Discount%20Code%20Approval&Input.Description=Request%20approval%20before%20automatically%20sending%20a%20discount%20code%20to%20unhappy%20customers&Input.DefinitionUrl=https://docs.ab.bot/public/playbooks/playbook.approval-workflow.json" target="_blank"><i class="bi bi-cloud-upload"></i> Import directly into Abbot now</a></div>

[!INCLUDE [specify-trigger](../../../includes/specify-trigger.md)]

1. Click the "Add a trigger" button on the Playbook editor page to add a trigger.

    <img src="/public/images/articles/quick-start.playbooks/add-trigger-button.png">

2. In the "Add Trigger" dialog, type "Neg" to filter the list and click the "Negative Sentiment" trigger.

    <img src="/public/images/articles/quick-start.playbooks/add-trigger-neg-search.png">

3. **Optional** Select Segments to filter which customers this Playbook will run for. For now, we'll leave this blank so the Playbook will run for all customers.

    <img src="/public/images/articles/quick-start.playbooks/add-trigger-choose-segment.png">

The Playbook will now run whenever we detect a message with negative sentiment in any of your tracked rooms.
Next, we'll configure _what_ the Playbook should do.

## Add Actions

Actions are the steps taken by the Playbook when it runs. There are lots of actions available, and we're adding more all the time.
For now, we'll just add a simple action to send a message to request approval.

1. Click the "Add an Action" button to add an action to the Playbook.

    <img src="/public/images/articles/quick-start.playbooks/add-action-button.png">

2. Search the "Add Action" dialog for the "Request Approval in Slack" step and click it.

    <img src="/public/images/articles/playbooks.approval-workflow/add-request-approval.png">

3. In the "Approvers" list, select the list of approvers. Only users who have been assigned as "Agents" in Abbot can be approvers.

    <img src="/public/images/articles/playbooks.approval-workflow/select-approvers.png">

4. Type in a message that will be sent to the approvers. This should contain the customer name, the channel, and a link to the original negative message. If you type a <kbd>{</kbd>, you'll be able to select from a list of variables that are available to use in the message. Select `Customer name from trigger` to insert the customer's name into the message.

    <img src="/public/images/articles/playbooks.approval-workflow/message-with-customer.png">

5. Type <kbd>#</kbd> to see a list of channels you can insert. Select "Channel from outputs" to insert a link to the channel where the message was posted.

    <img src="/public/images/articles/playbooks.approval-workflow/message-with-customer-channel.png">

6. To complete the message, type <kbd>{</kbd> once again and select `Link to message from trigger` to insert a link to the unhappy message. Slack will render this message so approvers can see the context of the negative sentiment.

    <img src="/public/images/articles/playbooks.approval-workflow/link-to-message.png">

7. Click "Save" to save the action. You'll now see two branches under the "Request Approval in Slack" step. One branch is for when the approval is granted, and the other is for when the approval is denied.

    <img src="/public/images/articles/playbooks.approval-workflow/save-request-approval.png">

8. In this example, we'll add a step to send the customer a discount code if the approval is granted. Click the "+" button underneath the text "If the request is approved, run these steps" and search for "Send Message". Click the "Send Message" step to add it to the Playbook.

    <img src="/public/images/articles/playbooks.approval-workflow/send-message-search.png">

9. For the "Channel or Thread", select "Reply to thread from trigger". This will allow us to reply to the original message with the discount code.

    <img src="/public/images/articles/playbooks.approval-workflow/reply-in-thread.png">

10. Now fill in a message with your discount code and click "Save".

    <img src="/public/images/articles/playbooks.approval-workflow/we-sorry.png">

11. The Playbook is ready to roll, but it's still a Draft. Any time you make changes to a Playbook, we save it as a Draft so you can review it before it goes live. Click "Publish Playbook" to publish the Playbook. It will immediately start running for any new messages that match the trigger.

    <img src="/public/images/articles/playbooks.approval-workflow/publish-it.png">

## Conclusion

Now that we've published the Playbook, it will run for any new messages that match the trigger. If a customer posts a message that our AI detects as negative, the Playbook will run and send an approval request to send the customer a discount code.

<img src="/public/images/articles/playbooks.approval-workflow/approval-request.png">

If the approval is granted or denied, the Playbook will will update the request message.

<img src="/public/images/articles/playbooks.approval-workflow/approval-request-updated.png">

If the approval is granted, the Playbook sends the customer a discount code as a reply.

<img src="/public/images/articles/playbooks.approval-workflow/approval-discount.png">
