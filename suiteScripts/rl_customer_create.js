/**
 * @NApiVersion 2.1
 * @NScriptType Restlet
 */
define(['N/record'], (record) => {

    const post = (data) => {
        const customer = record.create({ type: 'customer' });
        customer.setValue('companyname', data.companyname);
        customer.setValue('email', data.email);
        return { id: customer.save() };
    };

    return { post };
});

