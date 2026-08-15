/**
 * @NApiVersion 2.1
 * @NScriptType ScheduledScript
 */
define([], () => {

    const execute = () => {
        log.audit('Scheduled Script Run', 'This is a basic scheduled script execution.');
    };

    return { execute };
});
