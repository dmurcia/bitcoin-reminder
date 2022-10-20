import mongoose from 'mongoose'

const URI = 'mongodb://localhost/bitcoin-reminder'

const options = { keepAlive: true, keepAliveInitialDelay: 300000, serverSelectionTimeoutMS: 5000 }

const main = async () => {
  initEvents()
  try {
    await mongoose.connect(URI, options)
  } catch (error) {
    console.log(`Connection failed ${error}`)
  }
}

const initEvents = () => {
  const connection = mongoose.connection
  connection.on('connecting', () => {
    console.log(`DB is connecting`)
  })
  connection.on('open', () => {
    console.log(`DB is open`)
  })
}

main()
