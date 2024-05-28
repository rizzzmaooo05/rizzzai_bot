import TelegramBot from "node-telegram-bot-api";
import 'dotenv/config'

export default function botTelegramClient() {
  const token = process.env.TELEGRAM_BOT_API_TOKEN
  const bot = new TelegramBot(token, {polling: true})

  return bot
}

