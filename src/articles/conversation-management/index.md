---
uid: conversation-management
---

# What is Conversation Management?

Abbot helps you manage conversations with your customers in Slack.
So, what is a conversation?
In Abbot, a Conversation is a set of chat messages that represent a single request, question or comment from a customer.
Each new thread from a customer is assigned to a conversation, or creates a new conversation.

> [!NOTE]
> Before you can manage conversations with your customers in Slack, you need to install Abbot in to your Slack workspace.
> See the [Quick Start](xref:quick-start) guide, or the [Slack Integration](xref:integrations.slack) documentation for more information.

Currently, Abbot only supports conversation management in a Slack Connect channel shared with another organization, or in channels where there are guest users.
When you create a shared channel and invite Abbot to it, you'll get a message asking you if you want to configure this room for conversation tracking.
If you enable conversation tracking, Abbot will automatically create a new conversation for every top-level (i.e. not in a thread) message posted by someone *from outside your organization*.
Replies to that message will automatically be assigned to the same conversation.

You can see these conversations on your [Dashboard](https://app.ab.bot), if you're a [First Responder](xref:conversation-management.frs):

<img src="/public/images/articles/conversation-management/fr-dashboard.png">

If you select a conversation, you can see the [Conversation Timeline](xref:conversation-management.timeline), which is a record of all the activity that has occured in the conversation:

<img src="/public/images/articles/conversation-management/timeline.png">

In this example, "Serious Sam" asked a question, and "andrew" responded from the support team with a request for more information, which Serious Sam provided later.

> [!NOTE]
> To preserve privacy, Abbot doesn't store message content. Instead, we provide links to open the relevant message directly in Slack.

Abbot keeps track of who posted last in a conversation and uses that to help you identify the conversations that need attention right now.
If you go to the [conversation list](http://app.ab.bot/conversations) ("Conversations" on the sidebar), you can see a number of tabs at the top:

<img src="/public/images/articles/conversation-management/conversation-tabs.png">

These tabs let you view conversations in various states:

* Open - Any conversation that hasn't been closed yet.
* Needs Attention - Conversations where the *customer* was last to post.
* Responded - Conversations where someone from your team was last to post.
* Closed - Conversations that have been [Closed](xref:conversation-management.states#closed).
* Archived - Conversations that have been [Archived](xref:conversation-management.states#closed).

These core tools give you and the rest of your team a quick at-a-glace interface to manage customer interactions on Slack.
Abbot can do even more to help ensure your customers are happy!

## Next Steps

* [Conversation Timeline](xref:conversation-management.timeline)
* [First Responders and Room Roles](xref:conversation-management.frs)
* [Response Times and Notifications](xref:conversation-management.response-times)
* [Conversation States](xref:conversation-management.states)
* [Zendesk Integration](xref:integrations.zendesk)