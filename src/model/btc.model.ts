import { Schema, model } from 'mongoose'
import { BTC } from '../interface'

const btcSchema = new Schema<BTC>(
  {
    symbol: String,
    price_24h: Number,
    volume_24h: Number,
    last_trade_price: Number,
  },
  {
    timestamps: true,
  }
)

export default model<BTC>('BTC_Model', btcSchema)
