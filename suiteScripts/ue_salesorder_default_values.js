/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define([], () => {

    const beforeLoad = (context) => {
        if (context.type === context.UserEventType.CREATE) {
            const so = context.newRecord;
            so.setValue('memo', 'Thank you for your business.');
        }
    };

    return { beforeLoad };
});
