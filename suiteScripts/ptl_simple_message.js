/**
 * @NApiVersion 2.1
 * @NScriptType Portlet
 */
define([], () => {

    const render = (params) => {
        params.portlet.title = 'Welcome Message';
        params.portlet.html = '<h3>Welcome to your NetSuite dashboard!</h3>';
    };

    return { render };
});
