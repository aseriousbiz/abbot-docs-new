---
uid: integrations.slack.access
---

# What can Abbot see and do in Slack?

Abbot needs access to your Slack workspace to monitor conversations in shared Slack Connect channels with your customers.
If you have questions about Abbot's access, please contact us at [help@ab.bot](mailto:help@ab.bot), or on Slack Connect.

What can Abbot see?

* Abbot can **see** profile information for all users in your workspace.
    * This includes profile information for users in other organizations, **if** Abbot is a member of a shared channel with that organization.
* Abbot can **see** all public channels in your workspace.
* Abbot can **see** all messages in public channels **IF they are a member of that channel**
* Abbot can **see** all messages in private channels **IF they are a member of that channel**
* Abbot can **see** all Direct Messages in groups _that they are part of_

What can Abbot **not** see?

* Abbot can **not** see private channels it has not been added to.
* Abbot can **not** see Direct Messages between users, unless Abbot is a participant in the conversation.
* Abbot can **not** see messages in public channels it is not a member of (but they **can** see the names of those channels).

What can Abbot do?

* Abbot can post messages to public and private channels it is a member of.
* Abbot can post messages that **appear** as though they come from another user.
    * See [Pseudo-impersonation](#pseudo-impersonation) below for more.
* Abbot can join any public channel, even if it was previously removed.
* Abbot can send Slack Connect invitations to other organizations.
* Abbot can upload files to Slack (for example, when attaching images to messages).

What can Abbot **not** do?

* Abbot **cannot** transparently impersonate another user.
    * See [Pseudo-impersonation](#pseudo-impersonation) below for more.
* Abbot **cannot** accept Slack Connect invitations from other organizations.

## Pseudo-impersonation

Abbot cannot post as another user, but it can alter it's avatar and display name when posting a specific message.
This allows it to "pseudo-impersonate" another user, but only for a single message.
You can _always_ tell that a message was actually posted by Abbot because it will have an "App" badge next to the user's name:

<img class="limit-width" src="/public/images/articles/integrations.slack.access/app-badge.png">

Hovering over the user's name will reveal that Abbot was the user who posted the message:

<img src="/public/images/articles/integrations.slack.access/app-hover.png">
