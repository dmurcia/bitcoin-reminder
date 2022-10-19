import axios from 'axios'
import { STATUS } from './constants'

interface BTC {
  symbol: string
  price_24h: number
  volume_24h: number
  last_trade_price: number
}

export class API {
  private URL: string

  constructor(URL: string) {
    this.URL = URL
  }

  public get = async () => {
    const _ = this
    try {
      const { data, status } = await axios.get<BTC>(_.URL, {
        headers: {
          Accept: 'application/json',
        },
      })
      if (status == STATUS.OK) {
        return data
      }
      return data
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
