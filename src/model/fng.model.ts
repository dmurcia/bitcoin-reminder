import { Schema, model } from 'mongoose'

const fngSchema = new Schema(
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

export default model('FNG_Model', fngSchema)
