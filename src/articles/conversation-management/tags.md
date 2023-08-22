---
uid: converation-management.tags
---

# Conversation Tags

Conversation Tags are a way to categorize conversations in Abbot.

## Adding tags manually

You can add tags to a conversation by clicking "Manage Tags" next to a Conversation in the [Activity page](https://app.ab.bot):

<img src="/public/images/articles/conversation-management.tags/add-tag.png">

## Adding tags via AI

If you enable "AI Enhancements" in your [Organization settings](https://app.ab.bot/settings/organization), Abbot will attempt to automatically tag incoming conversations based on the content of the message.

> [!NOTE]
> AI tagging is performed using [OpenAI](https://openai.com) models hosted by Microsoft on Azure, and is currently in beta.
> If AI Enhancements are enabled, Abbot will send messages it receives to the Azure OpenAI service for analysis.
> See Microsoft's [Azure OpenAI Frequently Asked Questions](https://learn.microsoft.com/en-us/azure/ai-services/openai/faq) for privacy and other information.

