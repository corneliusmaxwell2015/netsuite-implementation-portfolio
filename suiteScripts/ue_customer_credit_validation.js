/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/record'], (record) => {

    const beforeSubmit = (context) => {
        const so = context.newRecord;
        const customerId = so.getValue('entity');
        const total = so.getValue('total');

        const customer = record.load({ type: 'customer', id: customerId });
        const creditLimit = customer.getValue('creditlimit');
        const balance = customer.getValue('balance');

        if (creditLimit && (balance + total) > creditLimit) {
            throw Error('Credit limit exceeded for this customer.');
        }
    };

    return { beforeSubmit };
});

