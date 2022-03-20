export const formatter = function (amount) {
    const numberFormat = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'COP',
        useGrouping: true,
        maximumSignificantDigits: 3,
    });
    return `$ ${numberFormat.format(amount)}`;
};