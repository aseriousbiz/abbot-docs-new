---
uid: conversation-management.tags
---

# Conversation Tags

Conversation Tags are a way to categorize conversations in Abbot.

## Adding tags manually

You can add tags to a conversation by clicking "Manage Tags" next to a Conversation in the [Activity page](https://app.ab.bot):

<img src="/public/images/articles/conversation-management.tags/add-tag.png">

## Adding tags via AI

If you enable "AI Enhancements" in your [Organization settings](https://app.ab.bot/settings/organization), Abbot will attempt to automatically tag incoming conversations based on the content of the message.

> [!NOTE]
> AI tagging is performed using [OpenAI](https://openai.com) models hosted by Microsoft on Azure, **not** the public API, and is currently in beta.
> If AI Enhancements are enabled, Abbot will send messages it receives to the Azure OpenAI service for analysis.
> See Microsoft's [Data, privacy, and security for Azure OpenAI Service](https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy) document for privacy and other information.

Abbot will attempt to tag conversations with `sentiment` and `topic` tags.
For example, conversations with negative sentiment will be tagged `sentiment:negative`, and conversations about billing will be tagged `topic:billing`.
This is a preview feature, so please feel free to reach out to us at [help@ab.bot](mailto:help@ab.bot) or in Slack Connect with feedback!
