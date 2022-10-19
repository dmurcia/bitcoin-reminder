import { API } from './api'
import { BTC_URL } from './constants'

const main = async () => {
  const btcApi = new API(BTC_URL)
  const btc = await btcApi.get()
  console.log(btc)
}

main()
