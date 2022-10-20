import { FNG_URL } from '../constant'
import { FNG } from '../interface'
import API from '../model/api.model'

export default class Fear_Greed {
  public async getTodayData(): Promise<FNG> {
    const api = new API(FNG_URL)
    return await api.fetchTodayData<FNG>()
  }
}
