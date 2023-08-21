---
uid: integrations.hubspot
---

# HubSpot Integration

You can use Abbot to create a HubSpot ticket from a Conversation.
Once a HubSpot ticket is created, Abbot will keep replies in-sync between Slack and HubSpot.

## Configuring the integration

To configure the integration, you need to authorize our OAuth app.
Only a HubSpot admin can authorize the app.

Go to the [Integration Settings](https://app.ab.bot/settings/organization/integrations) and click "Configure" on the "HubSpot" integration:

<img src="/public/images/articles/integrations.hubspot/hubspot-integration.png">

On the HubSpot integration page, click "Install" to log in to your HubSpot account and install the integration.

<img src="/public/images/articles/integrations.hubspot/hubspot-install.png">

> [!NOTE]
> You must be a HubSpot Super Admin to install our integration services.
> You may need to ask your HubSpot admin to install the integration for you.

Then, click "Install" to install the necessary HubSpot elements.
You'll be prompted to log in to your HubSpot account and allow Abbot access.
You may need to select the account you want to install the integration for.

Once you're back in the Abbot Dashboard, select "Configure" and select the HubSpot pipeline to use for new tickets.
Once you've selected a pipeline, you'll configure the HubSpot pipeline stages that should map to each Abbot conversation status.
When we create a ticket from a conversation, we'll use this pipeline to create the ticket.

<img src="/public/images/articles/integrations.hubspot/configure-hubspot-pipeline.png">

Finally, click "Enable" to activate the integration.

## Creating a HubSpot ticket for a conversation

To create a HubSpot ticket from a conversation, select any message in the Slack thread for the conversation, open the "triple-dot" menu, and select "Manage Conversation"

<img src="/public/images/articles/_common/manage-conversation-menu.png">

On the dialog that appears, select "Create Ticket":

<img width="533" alt="image" src="/public/images/articles/integrations.hubspot/create-ticket.png">

A new dialog will appear to allow you to enter a Subject and Description for the ticket.

<img width="529" alt="image" src="/public/images/articles/integrations.hubspot/create-ticket-form.png">

Click the "Create" button and Abbot will start creating the ticket in the background.

<img width="527" alt="image" src="/public/images/articles/_common/ticket-request-accepted.png">

When the process is complete, Abbot will send you a direct message with a link to the new ticket

## Keeping replies in sync

After creating the initial ticket, Abbot will take any replies posted in Slack and push them to the HubSpot ticket.
This is a one-way sync, messages posted on HubSpot will **not** be posted to Slack.

Messages appear in HubSpot as custom timeline events on the ticket.
They may not be visible by default, check the "Filter activity" dropdown on the Ticket Activity tab to make sure you can see events from Abbot:

<img src="/public/images/articles/integrations.hubspot/include-abbot-integration-activities.png">

## Keeping Status in sync

As the conversation status changes, Abbot will update the HubSpot ticket status to match.
For example, when a support agent from your team responds to a conversation, Abbot can move the HubSpot to indicate that the conversation is being worked on.
Similarly, if a customer responds to a conversation, Abbot can move the HubSpot ticket to indicate that the conversation is waiting for a response.
The mapping between Abbot conversation statuses and HubSpot ticket statuses is configured in the [HubSpot Pipeline Configuration](#configuring-the-integration).

## Linking HubSpot Companies to rooms

You can configure a HubSpot Company for each room Abbot is monitoring by going to the [Rooms list](https://app.ab.bot/settings/rooms). Find the room you want to configure, and select the "Settings" button
Then, scroll to "HubSpot Settings" and start typing the name of a company in your HubSpot account.
The company must already exist in your HubSpot account to be linked:

<img src="/public/images/articles/integrations.hubspot/link-company.png">

Click the organization in the dropdown and it will be linked to the room. 
Now any tickets opened from conversations in that room will automatically be associated with that HubSpot company. 
You can change the linked organization, or remove the link using the "Remove this link" button.
