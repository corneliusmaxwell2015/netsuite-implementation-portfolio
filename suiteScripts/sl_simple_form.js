/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/ui/serverWidget'], (ui) => {

    const onRequest = (context) => {
        const form = ui.createForm({ title: 'Simple Input Form' });

        const field = form.addField({
            id: 'custpage_message',
            type: ui.FieldType.TEXT,
            label: 'Enter a message'
        });

        form.addSubmitButton({ label: 'Submit' });

        if (context.request.method === 'POST') {
            const message = context.request.parameters.custpage_message;
            form.addField({
                id: 'custpage_output',
                type: ui.FieldType.INLINEHTML,
                label: 'You Entered'
            }).defaultValue = `<b>${message}</b>`;
        }

        context.response.writePage(form);
    };

    return { onRequest };
});
