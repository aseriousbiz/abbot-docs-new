---
uid: integrations.github
---

# GitHub Integration

You can use Abbot to create a GitHub issue from a Conversation.

## Configuring the integration

To configure the integration, you need to authorize our OAuth app.
You may require approval from the administrator of your GitHub organization to install the app.

Go to the [Integration Settings](https://app.ab.bot/settings/organization/integrations) and click "Configure" on the "GitHub" integration:

<img src="/public/images/articles/integrations.github/github-integration.png">

On the GitHub integration page, click "Install" to install our GitHub App.

<img src="/public/images/articles/integrations.github/github-install.png">

> [!NOTE]
> If you are not an administrator of your GitHub organization, you may need to ask your administrator to approve the integration for you.

You will need to select a GitHub organization or user account to install in to.
Abbot will require access to any of the repositories you want to be able to create issues in.

<img src="/public/images/articles/integrations.github/github-install-authorize.png">

Click "Install" to install the GitHub App.

Once you're back in the Abbot Dashboard, select the default repository to use when creating issues.
You will be able to select a different repo when creating an issue from a conversation, but this will be the default.

<img src="/public/images/articles/integrations.github/select-repo.png">

Finally, click "Enable" to activate the integration.

## Creating a GitHub issue for a conversation

To create a GitHub issue from a conversation, select any message in the Slack thread for the conversation, open the "triple-dot" menu, and select "Manage Conversation"

<img src="/public/images/articles/_common/manage-conversation-menu.png">

On the dialog that appears, select "Create GitHub Issue":

<img src="/public/images/articles/integrations.github/create-issue.png">

A new dialog will appear to allow you to choose the Repository and enter a Subject and Description for the ticket:

<img src="/public/images/articles/integrations.github/create-issue-form.png">

Click the "Create" button and Abbot will start creating the issue in the background.

<img width="527" alt="image" src="/public/images/articles/_common/ticket-request-accepted.png">

When the process is complete, Abbot will send you a direct message with a link to the new issue.

> [!NOTE]
> Unlike [Zendesk](xref:integrations.zendesk) and [HubSpot](xref:integrations.hubspot),
> Abbot does not currently sync replies between GitHub and Slack.
> Nor does it sync status changes.
