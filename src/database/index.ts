import mongoose from 'mongoose'

const URI = 'mongodb://localhost/bitcoin-reminder'

const main = async () => {
  await mongoose
    .connect(URI, { keepAlive: true, keepAliveInitialDelay: 300000, serverSelectionTimeoutMS: 5000 })
    .catch((err) => console.log(err))
  const connection = mongoose.connection
  connection.once('connecting', () => {
    console.log(`DB is connecting`)
  })
  connection.once('connected', () => {
    console.log(`DB is connected`)
  })
  connection.once('open', () => {
    console.log(`DB is connected`)
  })
}

main()
