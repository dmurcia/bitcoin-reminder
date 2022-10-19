import { BTC_URL } from '../constant'
import { BTC } from '../interface'
import API from '../model/api'

export default class Bitcoin {
  public async getData(): Promise<BTC> {
    const api = new API(BTC_URL)
    return await api.fetchData<BTC>()
  }
}
