import { BTC_URL, DAYS_LIMIT, FNG_THE_HIGHEST, FNG_THE_SMALLEST, HOURS_24 } from '../constant'
import { createArray, getMedian, isObjectEmpty } from '../helper'
import Email_helper from '../helper/email'
import { BTC, strategyData } from '../interface'
import API from '../model/api.model'
import BTC_Model from '../model/btc.model'
import Fear_Greed from './fng.controller'

export default class Bitcoin {
  private fearGreed
  private emailHelper

  constructor() {
    this.fearGreed = new Fear_Greed()
    this.emailHelper = new Email_helper()
  }

  /**
   * It gets bitcoin information every day
   */
  public async startProcess() {
    const fngData = await this.fearGreed.getTodayData()
    const btcsData = await this.getAll()
    const btcTotayData = await this.getTodayData()

    if (isObjectEmpty(fngData) || isObjectEmpty(btcsData) || isObjectEmpty(btcTotayData)) {
      throw new Error('Data is not available')
    }

    const btcArray = createArray(btcsData)
    const median = getMedian(btcArray)

    const strategyData: strategyData = {
      fngValue: parseInt(fngData.data[0].value),
      lastPrice: btcTotayData.last_trade_price,
      median: median,
    }

    this.emailHelper.sendEmail('test@test.com', this.getBitcoinMessage(strategyData))

    this.store(btcTotayData)
  }

  /**
   * Start the store the data every day
   */
  public start24Interval() {
    setInterval(async () => {
      this.startProcess()
    }, HOURS_24)
  }

  /**
   * Check these scenarios
   * - If last bitcoin price is lower than the median and fng value is lower than FNG_THE_SMALLEST return "Buy Bitcoin"
   * - If last bitcoin price is higher than the median and fng value is higher than FNG_THE_HIGHEST return "Buy Bitcoin"
   * - If the conditions are not fulfilled return "Hold"
   */
  private getBitcoinMessage({ lastPrice, median, fngValue }: strategyData): string {
    if (lastPrice < median && fngValue < FNG_THE_SMALLEST) {
      return 'Buy Bitcoin'
    } else if (lastPrice > median && fngValue > FNG_THE_HIGHEST) {
      return 'Sell Bitcoin'
    } else {
      return 'Hold'
    }
  }

  /**
   * @returns All the data stored in the DB
   */
  private async getAll(): Promise<Array<BTC>> {
    try {
      return await BTC_Model.find().sort({ timestamp: -1 }).limit(DAYS_LIMIT)
    } catch (error: unknown) {
      throw new Error('Could not acquire bitcoins data from BTC_Model')
    }
  }

  /**
   * Stores bitcoin data in the DB
   * @param btcData
   */
  private async store(btcData: BTC) {
    try {
      const newBTC = new BTC_Model(btcData)
      await newBTC.save()
    } catch (error: unknown) {
      throw new Error('Could not store bitcoin data')
    }
  }

  /**
   * @returns today's bitcoin data
   */
  public async getTodayData(): Promise<BTC> {
    try {
      const api = new API(BTC_URL)
      return await api.fetchTodayData<BTC>()
    } catch (error) {
      throw new Error('Could not acquire bitcoin data from btc api')
    }
  }
}
