/**
 * @NApiVersion 2.1
 * @NScriptType WorkflowActionScript
 */
define(['N/record'], (record) => {

    const onAction = (context) => {
        const so = context.newRecord;
        const log = record.create({ type: 'customrecord_creditlog' });

        log.setValue('custrecord_salesorder', so.id);
        log.setValue('custrecord_message', 'Credit violation logged.');
        log.save();
    };

    return { onAction };
});

