export const getComponentPropType = (type, defaultValue) => ({
    table: {
        type: {
            summary: Array.isArray(type) ? (type || []).join(' | ') : type,
        },
        ...(typeof defaultValue !== 'undefined' ? {
            defaultValue: {
                summary: defaultValue,
            },
        } : {}),
    },
});
