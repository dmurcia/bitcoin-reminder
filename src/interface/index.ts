export interface BTC {
  symbol: string
  price_24h: number
  volume_24h: number
  last_trade_price: number
}

export interface FNG {
  name: string
  data: [
    {
      value: string
      value_classification: string
      timestamp: string
      time_until_update: string
    }
  ]
  metadata: {
    error: string | null
  }
}
