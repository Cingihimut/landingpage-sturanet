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

  const leftCoins = data.slice(0, 5);

  return (
    <div className="p-4 mt-6 sm:mt-8 md:mt-10 lg:mt-12 md:p-8 lg:p-16">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">Top 10 Coinmarketcap</h1>
      <div className="flex sm:flex gap-4 lg:gap-8">
        <div className='w-full'>
          <div className='flex justify-between mb-6'>
            <p className='text-xl font-bold'>Name</p>
            <p className='text-xl font-bold mr-8'>Price</p>
          </div>
          {leftCoins.map((coin) => (
            <Link
              key={coin.id}
              href={`https://coinmarketcap.com/currencies/${coin.slug}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 p-4 border rounded-lg hover:bg-gray-100"
            >
              <div className='flex justify-between'>
                <h2 className="text-lg md:text-xl font-semibold">{coin.name} ({coin.symbol})</h2>
                <p>${coin.quote.USD.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Market;
