/**
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 */
define(['N/search', 'N/record'], (search, record) => {

    const getInputData = () => search.create({
        type: 'invoice',
        columns: ['internalid', 'amount']
    });

    const map = (context) => {
        const result = JSON.parse(context.value);
        context.write(result.id, result.values.amount);
    };

    const reduce = (context) => {
        const invoiceId = context.key;
        const amount = Number(context.values[0]);

        const inv = record.load({ type: 'invoice', id: invoiceId });
        inv.setValue('custbody_revenue_calc', amount * 0.9);
        inv.save();
    };

    return { getInputData, map, reduce };
});

