---
uid: announcements
---

# Announcements

Announcements allow you to send a message to several channels at once.
You can schedule announcements to go out at a specific time, or send them immediately.

## Create an announcement

To create an announcement, open a Direct Message with Abbot and just type what you want to announce!
Abbot will respond and ask you what you want to do next:

<img src="/public/images/articles/announcements/reply-options.png">

Select "Create announcement" to open the "Create Announcement" dialog:

<img src="/public/images/articles/announcements/create-announcement.png">

* **Send as Abbot**: By default, Abbot "[Pseudo-impersonates](xref:integrations.slack.access#pseudo-impersonation)" your user and posts the announcement as you.
    If you want the announcement to come from Abbot, select this option.
    If you've customized your Abbot Bot, this will use the custom name and avatar you've configured.

* **Message Delivery**: How do you want to choose the channels you'll send the message to?
    * **All Shared Channels** will send to all Slack Connect Channels in your workspace that Abbot is a member of.
    * **Pick Specific Channels** will allow you to select specific channels to send the message to.
    * **Customer Segment** will allow you to select Customer Segments to send the message to.
        Abbot will send the message to rooms associated with customers in the selected segments.

* **Message Schedule**: When do you want to send the message?
    * **Send Immediately** will send the message as soon as you click "Send".
    * **Schedule for Later** will allow you to select a Date and Time (in your local Time Zone) to send the announcement.

Configure how you want to send the announcement and click "Send" or "Schedule".

Abbot will mark the message as referring to an announcement by applying the 📣 reaction to the message:

<img src="/public/images/articles/announcements/announcement-message-ready-to-announce.png">

## Managing Announcements

You can manage active, scheduled, and completed announcements from the [Announcements page](https://app.ab.bot/announcements) in Abbot:

<img src="/public/images/articles/announcements/announcement-list.png">

Select any announcement there and you'll see a list of channels the announcement was, or will be, sent to and the status of the announcement:

<img src="/public/images/articles/announcements/announcement-detail.png">

From here, you can select the "Unschedule Announcement" button to cancel a scheduled announcement.

## Viewing Responses

Once an announcement has been sent, Abbot will track incoming responses and display them on the announcement detail page:

<img src="/public/images/articles/announcements/announcement-tracking.png">
