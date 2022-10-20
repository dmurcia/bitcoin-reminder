export interface BTC {
  symbol: string
  price_24h: number
  volume_24h: number
  last_trade_price: number
}

export interface FNG_data {
  value: string
  value_classification: string
  timestamp: string
  time_until_update: string
}

export interface FNG {
  name: string
  data: Array<FNG_data>
  metadata: {
    error: string | null
  }
}

export interface strategyData {
  fngValue: number
  lastPrice: number
  median: number
}
