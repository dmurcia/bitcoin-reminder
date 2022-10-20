export const BTC_URL: string = 'https://api.blockchain.com/v3/exchange/tickers/BTC-USD'
export const FNG_URL: string = 'https://api.alternative.me/fng'

export const STATUS: { OK: number } = { OK: 200 }

export const fetchOptions: { headers: object } = {
  headers: {
    Accept: 'application/json',
  },
}
