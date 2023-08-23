---
uid: playbooks.guides.customer-inactivity-alert
---

# Playbook Guide: Customer Inactivity Alert

This playbook guide shows you how to build a Playbook to alert your team when a customer has gone quiet. But first, it helps to understand why this is important.

## Customer Inactivity and Churn Risk

Customer inactivity is often considered a significant indicator of churn risk. Churn refers to the likelihood of a customer discontinuing a service or product. Here's why inactivity can be a concerning sign:

- **Reduced Engagement**: Inactivity often means the customer is not engaging with the product or service as frequently as they once did. This reduced engagement can be a precursor to the customer feeling that the product or service is no longer valuable or relevant to them.
- **Shift in Preferences**: Prolonged inactivity may indicate that the customer's preferences or needs have evolved, and the product or service no longer aligns with them.
- **Exploring Alternatives**: A customer's inactivity could be a result of them testing or shifting their attention to competing products or services.
- **Usability or Technical Issues**: Sometimes, inactivity stems from technical challenges or usability issues that the customer might be facing but hasn't communicated.
- **Lack of Awareness**: The customer might not be aware of all the features or benefits of a product, leading to underutilization and eventual disinterest.
- **Financial Constraints**: Economic factors might lead customers to prioritize other expenses, leading to decreased activity before ultimately discontinuing a service or product.

It's essential to monitor customer activity levels and have mechanisms in place to identify and address inactivity early. Proactively reaching out to inactive customers to understand their concerns, offer solutions, or provide additional value can often re-engage them and reduce the risk of churn.

Fortunately Abbot can monitor your customer channels for inactivity using this Playbook. Here's how to build it:

[!INCLUDE [create-playbook](../../../includes/create-playbook.md)]

> [!NOTE]
> You can <a href="/public/playbooks/playbook.customer-inactivity-playbook.json" download>download the playbook referenced in this guide</a> and [import it](xref:playbooks.import) in to your workspace.
> <div><a class="btn btn-secondary" href="https://app.ab.bot/playbooks/import#Input.Name=Customer%20Inactivity%20Alert&Input.Description=Alert%20the%20team%20when%20a%20customer%20has%20been%20inactive%20for%20a%20while&Input.DefinitionUrl=https://docs.ab.bot/public/playbooks/playbook.customer-inactivity-playbook.json" target="_blank"><i class="bi bi-cloud-upload"></i> Import directly into Abbot now</a></div>

[!INCLUDE [specify-trigger](../../../includes/specify-trigger.md)]

1. Click the "Add a trigger" button on the Playbook editor page to add a trigger.

    <img src="/public/images/articles/playbooks.guides.customer-inactivity-alert/add-trigger.png">

2. In the "Add Trigger" dialog, type "Sched" to filter the list and click the "Schedule" trigger.

    <img src="/public/images/articles/playbooks.guides.customer-inactivity-alert/schedule-trigger.png">

[!INCLUDE [dispatching](../../../includes/dispatching.md)]

<img src="/public/images/articles/playbooks.guides.customer-inactivity-alert/dispatching.png">


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

3. Add another "Continue If" step but select the "Customer days inactive" condition. This condition looks at the number of days since the last message was posted in a channel that belongs to the customer.

    <img src="/public/images/articles/playbooks.guides.customer-inactivity-alert/customer-days-inactive.png">

4. For the Comparison select "Equals". The reason we choose "Equals" here rather than "Greater than" is we don't want a notification every day that a customer is inactive. We only want to notify the team when a customer reaches the inactivity threshold. If you have differenc requirements, feel free to change this. Finally, choose the number of days for the threshold. In this example, we'll choose 7 days. Click "Save" to save this step.

    <img src="/public/images/articles/playbooks.guides.customer-inactivity-alert/customer-days-inactive-equals.png">

5. The final step is to notify the First Responders for this channel. Search the "Add Action" dialog for the "Notify Responders" step and click it.

    <img src="/public/images/articles/quick-start.playbooks/add-action-notify-search.png">

6. In "Channel", select "Channel from trigger". This ensures we'll notify whatever Hub is attached to the inactive customer. In our case, that will be the default Hub, because we haven't configured any other Hubs yet.

    <img src="/public/images/articles/quick-start.playbooks/notify-responders-channel.png">

7. For the "Title", let's just put "⚠️ Inactive Customer". This message will be shown in bold at the top of the notification message.

    <img src="/public/images/articles/playbooks.guides.customer-inactivity-alert/title-inactive-customer.png">

    > [!TIP]
    > To add an emoji to the title, type <kbd>:</kbd> and then start typing the name of the emoji. In this example, I typed `warning`.

8. For the "Message", we should include the name of the unhappy customer, so our team knows who to reach out to. If you type a <kbd>{</kbd>, you'll be able to select from a list of variables that are available to use in the message. Select `Customer name from trigger` to insert the customer's name into the message.

    <img src="/public/images/articles/playbooks.guides.customer-inactivity-alert/customer-name-expression.png">

9. We'll also want to add a link to the channel. Type <kbd>#</kbd> to select a channel to mention. In this case we'll choose "Channel from outputs". This is the channel associated with the customer.

    <img src="/public/images/articles/playbooks.guides.customer-inactivity-alert/channel-mention.png">

10. Click "Save" to save the action.

    <img src="/public/images/articles/playbooks.guides.customer-inactivity-alert/notify-responders-last-step.png">

11. The Playbook is ready to roll, but it's still a Draft. Any time you make changes to a Playbook, we save it as a Draft so you can review it before it goes live. Click "Publish Playbook" to publish the Playbook. It will immediately start running on the specified schedule.

## Conclusion

Now that we've published the playbook, it will run every day and report on any customers that have been inactive for 7 days at the time of the run. This is a great way to be reminded when it might be time to follow-up with a customer.
