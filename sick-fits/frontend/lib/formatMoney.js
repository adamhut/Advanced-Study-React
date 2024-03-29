export default function formatMoney(amount = 0) {
    const options = {
        style: 'currency',
        currency: 'USD',
        minimumFactionDigits: 2,
    }

    // check if clean Dollar amount
    if (amount % 100 === 0) {
        options.minimumFactionDigits = 0;
    }

    const formatter = Intl.NumberFormat('en-US', options);
    return formatter.format(amount / 100);
}