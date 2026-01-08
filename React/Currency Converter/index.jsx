const { useState, useMemo } = React;

export function CurrencyConverter() {
    const rates = {
        USD: 1,
        EUR: 0.92,
        GBP: 0.78,
        JPY: 156.7
    };

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");

    // Memoized conversion to base currency (USD)
    const baseAmount = useMemo(() => {
        return amount / rates[fromCurrency];
    }, [amount, fromCurrency]);

    // Final converted amount (depends on toCurrency only)
    const convertedAmount = (baseAmount * rates[toCurrency]).toFixed(2);

    return (
        <div className="converter">
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
            />

            <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
            >
                {Object.keys(rates).map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>

            <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
            >
                {Object.keys(rates).map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>

            <div className="result">
                {convertedAmount} {toCurrency}
            </div>
        </div>
    );
}
