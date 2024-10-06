import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request) {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      params: {
        limit: 5
      },
      headers: {
        'X-CMC_PRO_API_KEY': process.env.NEXT_PUBLIC_CMC_API_KEY,
      },
    });

    return NextResponse.json(response.data.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}

export async function OPTIONS(request) {
  return NextResponse.json({}, { status: 200 });
}