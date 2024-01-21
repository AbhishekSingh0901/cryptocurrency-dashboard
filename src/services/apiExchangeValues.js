export async function getExchangeValues() {
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/exchange_rates`);
    // console.log(res);
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching market cap data:", error.message);
    throw error; // Re-throw the error to maintain consistency in error handling
  }
}
