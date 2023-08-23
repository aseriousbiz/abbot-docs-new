<!-- markdownlint-disable-file MD041 -->

## Dispatching

After saving the "Schedule" trigger, you'll notice a "Dispatching" option. It's worth a minute to discuss what this option does and why it's here.

Most triggers are in response to an event in Slack. When such an event occurs, we can run the Playbook in the context of the channel where the event occurs as well as the customer associated with that channel.

However, the "Schedule" trigger doesn't run in response to Slack event. This is why we need to configure the Playbook to run for a specific set of customers via the Dispatching option.

Select "Run once for each customer". This provides the option run this playbook for a specific set of customer segments or all customers.

For more about setting up customers and customer segments, see [Customer Management in Abbot](xref:customers).

In the screenshot below you can see this Playbook will only send the report to our esteemed Business and Enterprise customers.
