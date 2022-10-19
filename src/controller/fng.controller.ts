import { FNG_URL } from '../constant'
import { FNG } from '../interface'
import API from '../model/api'

export default class Fear_Greed {
  public async getData(): Promise<FNG> {
    const api = new API(FNG_URL)
    return await api.fetchData<FNG>()
  }
}
