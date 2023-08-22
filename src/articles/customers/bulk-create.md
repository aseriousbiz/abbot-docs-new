---
uid: customers.bulk-create
---

# Creating Customers in Bulk

You probably already have channels in Slack for all your customers.
Having to create a customer record for each individually would be tedious, but Abbot is here to help!

## Creating customers from your existing rooms

1. Go to the [Rooms page in Abbot](https://app.ab.bot/rooms). On the right you'll see a "Create customers for unassigned rooms" link. Click that link.

    <img src="/public/images/articles/customers.bulk-create/create-from-rooms-link-on-rooms-page.png">

2. Check the initial results. Abbot attempts to detect common prefixes for your channels, but likely needs to be adjusted. In this example, we can see that the channels for customers have the "#customer-" prefix. Abbot didn't quite detect that though, so all the customers it detected start with the name "Customer"

    <img src="/public/images/articles/customers.bulk-create/create-from-rooms-no-common-prefix.png">

3. Let's type "Customer" in as the common prefix and see what happens. The results are much better now. We can see that Abbot has detected 2 customers, and guessed the name of the customer based on the channel name.

    <img src="/public/images/articles/customers.bulk-create/create-from-rooms-customer-prefix.png">

4. Click "Create customers" to create the customers. Abbot will create a customer record for each of the channels it detected and associate that customer with the channel.

    <img src="/public/images/articles/customers.bulk-create/created-customers.png">
