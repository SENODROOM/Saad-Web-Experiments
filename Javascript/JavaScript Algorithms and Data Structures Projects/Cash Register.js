function checkCashRegister(price, cash, cid) {
    const UNITS = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
    ];

    let changeDue = cash - price;
    let totalCID = cid.reduce((sum, curr) => sum + curr[1], 0);
    totalCID = Math.round(totalCID * 100) / 100;

    if (totalCID < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    if (totalCID === changeDue) {
        return { status: "CLOSED", change: cid };
    }

    let change = [];
    let cidMap = Object.fromEntries(cid);

    for (let [name, value] of UNITS) {
        let available = cidMap[name];
        let used = 0;

        while (changeDue >= value && available >= value) {
            changeDue = Math.round((changeDue - value) * 100) / 100;
            available = Math.round((available - value) * 100) / 100;
            used = Math.round((used + value) * 100) / 100;
        }

        if (used > 0) {
            change.push([name, used]);
        }
    }

    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change };
}
