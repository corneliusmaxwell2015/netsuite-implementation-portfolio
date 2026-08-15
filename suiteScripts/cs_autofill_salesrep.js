/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 */
define([], () => {

    const pageInit = (context) => {
        const rec = context.currentRecord;
        rec.setValue('salesrep', 1234); // Example internal ID
    };

    return { pageInit };
});
