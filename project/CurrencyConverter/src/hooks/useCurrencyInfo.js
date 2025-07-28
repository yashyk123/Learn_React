import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        // Construct the API URL using the provided API key and the base currency
        // The API key 'ae0ffd6802cb4b07b5e9c6c3' is embedded here.
        // In a real application, consider storing this in an environment variable for security.
        const apiKey = "ae0ffd6802cb4b07b5e9c6c3";
        const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`;

        fetch(apiUrl)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((res) => {
                // ExchangeRate-API's 'latest' endpoint returns conversion_rates
                // which is an object containing all rates relative to the base currency.
                setData(res.conversion_rates);
                console.log("Fetched data:", res.conversion_rates); // Log the fetched data
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
                // Optionally, handle error state in your component
            });
    }, [currency]); // Re-run effect when currency changes

    console.log("Current data state:", data); // Log the current state of data
    return data;
}

export default useCurrencyInfo;