export async function getPortfolio(curr = "usd") {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tether%2Cethereum%2Cbinancecoin&order=market_cap_desc`
    );
    console.log(res);
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
