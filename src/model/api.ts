import axios from 'axios'
import { fetchOptions, STATUS } from '../constant'

export default class API {
  private URL: string

  constructor(URL: string) {
    this.URL = URL
  }

  public fetchData = async <T>(): Promise<T> => {
    try {
      const { data, status } = await axios.get<T>(this.URL, fetchOptions.headers)
      if (status != STATUS.OK) {
        throw new Error(`There was a problem fetching the data`)
      }
      return data
    } catch (error: unknown) {
      throw new Error(`There was a problem fetching the data: ${error}`)
    }
  }
}
