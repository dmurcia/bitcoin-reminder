import './database'

import Bitcoin from './controller/btc.controller'

const btc = new Bitcoin()
btc.build()
btc.start24Interval()
