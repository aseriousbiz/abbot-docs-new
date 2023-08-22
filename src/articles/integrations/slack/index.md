---
uid: integrations.slack
---

# Slack Integration

Abbot integrates with Slack to monitor conversations in shared Slack Connect channels with your customers.
Slack integration is the key to Abbot's [conversation management](xref:conversation-management) features.

> [!NOTE]
> This article describes the Slack Integration in depth, but if you just want to install Abbot and get started, see the [Quick Start](xref:quick-start.install) guide.

## Signing in to Slack

You sign in to Abbot *using* your Slack account.
When you sign in, you'll be asked to authorize Abbot to access your Slack workspace:

<img class="limit-width" src="/public/images/articles/_common/sign-in-with-slack.png">

This access is **limited** and only provides Abbot with your identity information (name, avatar, email, etc.).
However, to continue to take full advantage of Abbot's features, you'll need to install the Abbot Bot in your Slack workspace.

## Installing Abbot into your Slack Workspace

> [!NOTE]
> Only an Administrator of your Slack Workspace can perform this step.
> You'll need to make sure you have the appropriate permissions to install apps in your Slack workspace or get an Administrator to do it for you.

When you first log in, if the Abbot Bot is not logged in, you'll see a welcome message asking your to connect Abbot to Slack.
Select how you plan to use Abbot and click "Connect Abbot to your workspace" to install Abbot.

<img src="/public/images/articles/_common/onboarding-screen.png">

Slack will prompt you to authorize the Abbot Bot to access your workspace.
You can see all the permissions Abbot will request on the authorization screen (this screenshot may become out of date, refer to the actual screen when you install Abbot):

<img class="limit-width" src="/public/images/articles/_common/slack-install-abbot.png">

> [!NOTE]
> See our [Slack Permissions](xref:integrations.slack.access) page for more information about what Abbot can see and do in your Slack workspace.

## Using Abbot's integrations

Once you've installed Abbot in your Slack workspace, you can start using [conversation management](xref:conversation-management) features and [Playbooks](xref:playbooks) to manage your customer relationships.
