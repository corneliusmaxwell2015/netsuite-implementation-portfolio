/**
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 */
define(['N/search'], (search) => {

    const getInputData = () => search.create({
        type: 'item',
        columns: ['itemid', 'displayname']
    });

    const map = (context) => {
        const result = JSON.parse(context.value);
        context.write(result.id, result.values.displayname);
    };

    const reduce = (context) => {
        // Basic reduce placeholder
        log.debug('Item Export', {
            id: context.key,
            name: context.values[0]
        });
    };

    return { getInputData, map, reduce };
});
