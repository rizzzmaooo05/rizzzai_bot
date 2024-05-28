import express from "express";
import router from '../src/routes/router.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(router)
app.use(cors({credentials: true}))
app.listen(9002, () => console.log('server run!'))

