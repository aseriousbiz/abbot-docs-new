---
uid: integrations.zendesk
---

# Integrations

Abbot provides integrations with third-party services.

## Zendesk

You can use Abbot to create a Zendesk ticket from a Conversation.
Once a Zendesk ticket is created, Abbot will keep replies in-sync between Slack and Zendesk.

### Configuring the integration

To configure the integration, you need to authorize our OAuth app.
Only a Zendesk admin can authorize the app.

Go to the [Integration Settings](https://app.ab.bot/settings/organization/integrations) and click "Configure" on the "Zendesk" integration:

<img width="1550" alt="image" src="/public/images/integrations.zendesk/configure-zendesk.png">

On the Zendesk integration page, click "Configure" next to "Authentication Configured" and enter your Zendesk subdomain:

<img width="1114" alt="image" src="/public/images/integrations.zendesk/configure-credentials.png">

Then, click "Install" to install the necessary Zendesk elements.
You'll be prompted to log in to your Zendesk account and allow Abbot access.

Finally, select "Enable" to enable the integration.

### Creating a Zendesk ticket for a conversation

To create a Zendesk ticket from a conversation, select any message in the Slack thread for the conversation, open the "triple-dot" menu, and select "Manage Conversation"

<img width="311" alt="Screen Shot 2022-06-30 at 3 50 41 PM" src="/public/images/integrations.zendesk/manage-conversation-menu.png">

On the dialog that appears, select "Create Ticket":

<img width="533" alt="image" src="/public/images/integrations.zendesk/create-ticket.png">

A new dialog will appear to allow you to enter a Subject and Description for the ticket.
In addition, you'll see the "Requester" that will be used on Zendesk, and the [Zendesk Organization linked to the current room](#linking-zendesk-organizations-to-rooms), if any.

<img width="529" alt="image" src="/public/images/integrations.zendesk/create-ticket-form.png">

Click the "Create" button and Abbot will start creating the ticket in the background.

<img width="527" alt="image" src="/public/images/integrations.zendesk/ticket-request-accepted.png">

When the process is complete, Abbot will send you a direct message with a link to the new ticket

<img width="693" alt="image" src="/public/images/integrations.zendesk/ticket-link-dm.png">

If the Slack message is a thread with replies, Abbot imports every reply in the thread as a comment on the Zendesk ticket that it creates.

### Keeping replies in sync

After creating the initial ticket, Abbot will take any replies posted in Slack and push them to the Zendesk ticket.
In addition, any Public Reply posted on the Zendesk ticket will be pushed back to the Slack thread.

By default, Zendesk closes tickets after 28 days of inactivity. A closed Zendesk ticket cannot receive comments (Zendesk will create a new ticket). Therefore, Abbot will not push Slack replies to a closed Zendesk ticket.

### Keeping Status in sync

When a Zendesk Ticket is marked as `Solved`, the linked Abbot `Conversation` will also be `Closed`. If a customer (foreign member of a shared channel or a guest account) replies to the thread in Slack, the `Conversation` *and* the linked Zendesk ticket will be reopened.

### Linking Zendesk organizations to rooms

You can configure a Zendesk organization for each room Abbot is monitoring by going to the [Rooms list](https://app.ab.bot/settings/rooms). Find the room you want to configure, and select the "Settings" button:


Then, go to "Zendesk Settings" and start typing the name of an organization in your Zendesk account. The organization must already have been created in your Zendesk account:

<img width="1523" alt="image" src="/public/images/integrations.zendesk/select-organization.png">

Click the organization in the dropdown and it will be linked to the room. Now any tickets opened from conversations in that room will automatically be associated with that Zendesk organization. You can change the linked organization, or remove the link using the "Remove this link" button:

<img width="1531" alt="image" src="/public/images/integrations.zendesk/reset-organization.png">