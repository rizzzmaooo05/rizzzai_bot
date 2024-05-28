import express from "express";
import router from '../src/routes/router.js'
import cors from 'cors'

import models from "../src/models/models.js";

const app = express()
app.use(express.json())
app.use(router)
app.use(cors({credentials: true}))
app.listen(9002, () => console.log('server run!'))

const bot = models.botTelegramClient()
bot.on('message', async (response) => {
  const id = response.from.id
  const message = response.text

  if(message == '/start') {
    return bot.sendMessage(id, 'Silahkan ketikan perintah Anda untuk dieksekusi oleh Rizzz AI!')
  }

  bot.sendMessage(id, 'tunggu sebentar ...')

  const groqCLient = models.groqCLient()
  try {
    const groq = await groqCLient.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: message
        }
      ],
      model: 'llama3-8b-8192',
      temperature: 0.2
    })

    bot.sendMessage(id, groq.choices[0].message.content)
  }
  catch {
    bot.sendMessage(id, 'Gagal terkoneksi ke API, coba lagi nanti!')
  }
})
