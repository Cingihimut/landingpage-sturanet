'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Market = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/getCryptoData')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(setData)
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
      });
  }, []);

  if (error) return <div>Failed to load: {error}</div>;
  if (!data) return <div>Loading...</div>;

  // Split data into two arrays: first 5 for left column, next 5 for right column
  const leftCoins = data.slice(0, 5);
  const rightCoins = data.slice(5, 10);

  return (
    <div className="p-4 md:p-8 lg:p-16 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">Top 10 Coinmarketcap</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
        {/* Left column */}
        <div>
          {leftCoins.map((coin) => (
            <Link 
              key={coin.id} 
              href={`https://coinmarketcap.com/currencies/${coin.slug}/`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block mb-4 p-4 border rounded-lg hover:bg-gray-100"
            >
              <h2 className="text-lg md:text-xl font-semibold">{coin.name} ({coin.symbol})</h2>
              <p>Price: ${coin.quote.USD.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>

        {/* Right column */}
        <div>
          {rightCoins.map((coin) => (
            <Link 
              key={coin.id} 
              href={`https://coinmarketcap.com/currencies/${coin.slug}/`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block mb-4 p-4 border rounded-lg hover:bg-gray-100"
            >
              <h2 className="text-lg md:text-xl font-semibold">{coin.name} ({coin.symbol})</h2>
              <p>Price: ${coin.quote.USD.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Market;
