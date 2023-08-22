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

To do so, we'll add a "Continue If" step. Click "Add an action" and then filter the list to find the "Continue If" step.



