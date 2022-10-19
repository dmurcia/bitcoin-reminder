import Bitcoin from './controller/btc.controller'

const main = async () => {
  const btcApi = new Bitcoin()
  const btc = await btcApi.getData()
  console.log(btc)
}

main()
