// Url to get bitcoin data
export const BTC_URL: string = 'https://api.blockchain.com/v3/exchange/tickers/BTC-USD'
// Url to get Fear & Greed Index
export const FNG_URL: string = 'https://api.alternative.me/fng'

export const STATUS: { OK: number } = { OK: 200 }

export const fetchOptions: { headers: object } = {
  headers: {
    Accept: 'application/json',
  },
}

// How many data will get
export const DAYS_LIMIT = 30
// The smalllest Fear & Greed Index accepted
export const FNG_THE_SMALLEST = 20
// The highest Fear & Greed Index accepted
export const FNG_THE_HIGHEST = 80
// Update data each day
export const HOURS_24 = 1000 * 60 * 60 * 24
