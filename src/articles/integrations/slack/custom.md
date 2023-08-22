---
uid: integrations.slack.custom
---

# Customizing Abbot

You can customize Abbot by configuring a "Custom Slack App".
This replaces our default Slack App with a custom Slack App that you control.
You can change the avatar, bot name, and more, while still taking advantage of Abbot's rich features.
To do this, you'll create your own custom Slack App, but instead of providing your own server to handle callbacks and API requests, you'll use Abbot.

There are several steps to creating a custom Slack App, and we're always happy to help.
Feel free to reach out to us via email at [help@ab.bot](mailto:help@ab.bot), or on Slack Connect.

## Creating the Custom Slack App

To create a custom Slack App, go to the [Integration Settings](https://app.ab.bot/settings/organization/integrations) and click "Configure" on the "Custom Slack App" integration:

<img src="/public/images/articles/integrations.slack.custom/slack-integration.png">

Click the "Set" button next to "Manifest configured" to configure the "Manifest" for your Slack App.
The manifest describes your app to Slack, and allows you to customize the app's name, avatar, and more.
Enter a "Display Name" for your app, which will show up in your Slack Workspace's App Gallery.
In addition, provide a "Bot User Display Name".
This is the name that the bot will use in Slack message.

> [!NOTE]
> If Abbot interacts with customers in your shared channels, this name will be visible to those customers.
> Choose something that reflects your brand and is appropriate for your customers.

<img src="/public/images/articles/integrations.slack.custom/app-manifest-config.png">

Click "Save Manifest" to save your changes.
A "Manifest JSON" will appear below the form.
This is the JSON that will be used to configure your Slack App.
You don't need to save or edit this JSON, it's provided for your reference and so you review what permissions and features the custom app will use.

Click the "Create App" button to be redirected to Slack's developer portal.
The Manifest JSON will be prefilled and you'll be ready to create your app.
First, select the workspace you want to install the app in.
Then, Slack will give you a chance to review the app's permissions and features:

<img src="/public/images/articles/integrations.slack.custom/manifest-deploy-review.png">

Select "Create" and Slack will confirm that the app has been created:

<img src="/public/images/articles/integrations.slack.custom/manifest-deploy-confirm.png">

Now, we've created a Custom Slack App in your organization to represent Abbot.
Next, Abbot needs to know the credentials for this app so it can use it to interact with Slack.

## Configure Slack App Credentials

Go to the [Slack App Dashboard](https://api.slack.com/apps) and select your new app.
Scroll to "App Credentials" to collect four pieces of information from Slack's API dashboard page for the custom app:

<img src="/public/images/articles/integrations.slack.custom/manifest-deploy-app-credentials.png">

Create a text file to store these values, and copy the following values from the Slack dashboard into the file:

```
App ID:
Client ID:
Client Secret:
Signing Secret:
```

> [!NOTE]
> Do not share these values outside your company, or with anyone who should not have access to your Slack workspace.
> You don't need to keep this values around after you've configured Abbot, they are always available to you on the [Slack API Dashboard](https://api.slack.com/apps).

Now, **return** to the [Custom Slack App Integration Settings](https://app.ab.bot/settings/organization/integrations/slackapp) page.
Click the "Set" button next to "Credentials configured" to go to the credential configuration page.
Fill in the values you saved earlier:

<img src="/public/images/articles/integrations.slack.custom/manifest-deploy-set-credentials.png">

Click "Save Credentials" to save these values.

> [!NOTE]
> If your Client Secret or Signing Secret change (such as if you rotate them, or if they are leaked) you'll need to repeat this process.
> See [rotating app secrets](#rotating-app-secrets) for more info.

The app is now ready to be installed!

## Installing your custom app

Click the "Install" button to install your new custom Slack App in your workspace:

<img src="/public/images/articles/integrations.slack.custom/install-button.png">

> [!NOTE]
> Only an Administrator of your Slack Workspace can perform this step.
> You'll need to make sure you have the appropriate permissions to install apps in your Slack workspace or get an Administrator to do it for you.

Review the permissions Abbot needs (see [Required Permissions](xref:integrations.slack.access) for more information on what permissions Abbot needs) and allow the app to access your workspace.
Once you return, the Custom Slack Bot is installed but **is not enabled**.

## Adding the Custom Bot to rooms

When the Custom Slack Bot is enabled, the default "Abbot" bot will be disabled and will no longer be able to monitor conversations.
So, before enabling the custom bot, we want to ensure it's invited to the same rooms the original "Abbot" bot was invited to.

Click "Manage Rooms" next to "Invited to rooms":

<img src="/public/images/articles/integrations.slack.custom/manage-rooms-button.png">

You'll see a list of all the rooms the original "Abbot" bot was invited to.
You can check one or more of these rooms, or select the checkbox at the top to select all rooms.
Then, click "Invite `@YourBotName`" to invite the custom bot to these rooms:

<img src="/public/images/articles/integrations.slack.custom/invite-to-rooms.png">

With the bot invited to the rooms, you can now enable the bot.

## Enabling the Custom Bot

Go to the [Custom Slack App Integration Settings](https://app.ab.bot/settings/organization/integrations/slackapp) page and click "Enable" to enable your custom bot!

<img src="/public/images/articles/integrations.slack.custom/enable-button.png">

Test it out by going to a room where the bot is invited and typing `@YourBotName ping` to see if it responds.

<img src="/public/images/articles/integrations.slack.custom/ping-response.png">

### Customizing your Bot's appearance

When using a custom app, you have complete control over your Bot's appearance.
This includes it's display name, avatar, and background color.
To configure this, go to the [Slack App Dashboard](https://api.slack.com/apps) and select your app.

<img src="/public/images/articles/integrations.slack.custom/api-dashboard-custom-app.png">

Scroll to "Display Information" to configure the App Name, Description, Avatar, and Background Color:

<img src="/public/images/articles/integrations.slack.custom/api-dashboard-display-information.png">

To customize the Bot's display name, hover your mouse over the bot's name in any message in Slack and select "Configuation" in the popup menu:

<img src="/public/images/articles/integrations.slack.custom/slack-app-info-popup.png">

Scroll down to "Bot User" and click "Edit" next to your bot's name to customize it.

<img src="/public/images/articles/integrations.slack.custom/slack-edit-bot-name.png">

### Rotating App Secrets

You should rotate the Client Secret and Signing Secret for your app periodically.

> [!WARNING]
> Before you rotate the credentials, make sure you are ready to update Abbot with the new values right away.
> Regenerating credentials may interrupt Abbot's ability to interact with Slack until you give Abbot the new values.
> You will also need to reinstall the app, so make sure you have the appropriate permissions to install apps in your Slack workspace or get an Administrator to do it for you.

Go to the [Custom Slack App Integration Settings](https://app.ab.bot/settings/organization/integrations/slackapp) page and click "Edit" next to "Credentials configured".
Then, click "Edit Settings".
Leave this page open, and in a separate browser window, go to the [Slack App Dashboard](https://api.slack.com/apps) and select your app.

<img src="/public/images/articles/integrations.slack.custom/api-dashboard-custom-app.png">

Scroll down to the "App Credentials" section and click "Regenerate" next to the secret you want to rotate.
Then, copy the updated credential over to Abbot, and repeat with the other credential (if you want to rotate both).
Finally, click "Save Credentials" to save the new values.

Click "Reinstall" to reinstall the app in your workspace:

<img src="/public/images/articles/integrations.slack.custom/reinstall-button.png">
