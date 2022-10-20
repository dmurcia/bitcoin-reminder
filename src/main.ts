import './database'

import Bitcoin from './controller/btc.controller'

const btc = new Bitcoin()
btc.startProcess()
btc.start24Interval()
