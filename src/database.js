const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
mongoose
  .connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/mean-employees`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    }
  )
  .then((db) => console.log('DB is connected'))
  .catch((err) => console.error('DB is not connected'))
