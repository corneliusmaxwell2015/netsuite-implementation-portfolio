/**
 * @NApiVersion 2.1
 * @NScriptType Restlet
 */
define(['N/record'], (record) => {

    const get = (params) => {
        const customer = record.load({
            type: 'customer',
            id: params.id
        });

        return {
            id: params.id,
            companyname: customer.getValue('companyname'),
            email: customer.getValue('email')
        };
    };

    return { get };
});
