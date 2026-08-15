/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 */
define([], () => {

    const fieldChanged = (context) => {
        if (context.fieldId === 'quantity') {
            const qty = context.currentRecord.getValue('quantity');
            if (qty > 100) alert('Large quantity detected.');
        }
    };

    return { fieldChanged };
});
