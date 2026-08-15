/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/ui/serverWidget', 'N/search'], (ui, search) => {

    const onRequest = (context) => {
        const form = ui.createForm({ title: 'Inventory Dashboard' });

        const list = form.addSublist({
            id: 'inventory',
            type: ui.SublistType.LIST,
            label: 'Item Availability'
        });

        const results = search.create({
            type: 'item',
            columns: ['itemid', 'quantityavailable']
        }).run().getRange({ start: 0, end: 50 });

        results.forEach((r, i) => {
            list.setLineItemValue('itemid', i, r.getValue('itemid'));
            list.setLineItemValue('qty', i, r.getValue('quantityavailable'));
        });

        context.response.writePage(form);
    };

    return { onRequest };
});

