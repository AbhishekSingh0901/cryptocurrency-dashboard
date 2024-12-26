# Cryptocurrency Dashboard

A React-based dashboard that fetches and displays cryptocurrency market data. It includes real-time charts, exchange rates, and portfolio tracking features.

## Features

- **Navbar**

  - Adjust displayed currency
  - Search for specific coins

- **Dashboard**

  - Displays market data and charts
  - Positions for adding or customizing new widgets

- **Chart**

  - Shows price movement in different intervals (1D, 7D, 1M, 6M, 1Y)
  - Fetches data dynamically via React Query

- **Exchange Values**

  - Simple exchange calculator for varied cryptocurrencies

- **Market Cap List**
  - Shows coins, their market cap, and daily percentage changes

## Getting Started

1. **Install dependencies**
   ```
   npm install
   ```
2. **Start the development server**
   ```
   npm start
   ```
3. **Build for production**
   ```
   npm run build
   ```

## Project Structure

- **src/services**
  - API functions (e.g., `apiChartData`, `apiExchangeValues`)
- **src/features**
  - Feature-specific components like `marketCap`, `exchangeValues`, `chart`, `portfolio`
- **src/ui**
  - Reusable UI components such as `Navbar`, `Dashboard`

## Contributing

- Fork the repo and create pull requests for your changes.
- Use small commits and descriptive commit messages.

## License

This project is yours to extend and improve for personal or commercial use.
