/**
 * @NApiVersion 2.1
 * @NScriptType WorkflowActionScript
 */
define([], () => {

    const onAction = (context) => {
        const rec = context.newRecord;
        rec.setValue('custbody_status_flag', 'Updated');
        return rec;
    };

    return { onAction };
});
