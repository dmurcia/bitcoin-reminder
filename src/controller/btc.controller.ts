import { BTC_URL } from '../constant'
import { createArray, getMedian } from '../helper'
import { BTC } from '../interface'
import API from '../model/api.model'
import BTC_Model from '../model/btc.model'
import Fear_Greed from './fng.controller'

export default class Bitcoin {
  /**
   * It gets bitcoin information every day
   */
  public async startProcess() {
    // setInterval(async () => {
    const fearGreed = new Fear_Greed()
    const fngData = await fearGreed.getTodayData()
    const bitcoinsData = await this.getAll()
    const btcTotayData = await this.getTodayData()
    if (bitcoinsData.length >= 10) {
      const btcArray = createArray(bitcoinsData)
      const median = getMedian(btcArray)
      console.log(median)
    }
    this.store(btcTotayData)
    // }, 1000)
  }

  /**
   * @returns All the data stored in the DB
   */
  private async getAll(): Promise<Array<BTC>> {
    return await BTC_Model.find().sort({ timestamp: -1 }).limit(10)
  }

  /**
   * Stores bitcoin data in the DB
   * @param btcData
   */
  private async store(btcData: BTC) {
    const newBTC = new BTC_Model(btcData)
    await newBTC.save()
  }

  /**
   * @returns today's bitcoin data
   */
  public async getTodayData(): Promise<BTC> {
    const api = new API(BTC_URL)
    return await api.fetchTodayData<BTC>()
  }
}
