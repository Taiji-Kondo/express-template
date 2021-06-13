import Express from 'express'
import 'reflect-metadata'
import router from './routes/index'
import dotenv from 'dotenv'
dotenv.config()

const app = Express()
const port = process.env.APP_PORT

app.use('/', router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
