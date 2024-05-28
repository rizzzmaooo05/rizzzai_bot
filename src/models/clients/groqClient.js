import Groq from "groq-sdk";
import 'dotenv/config'

export default function groqCLient() {
  const groqApiKey = process.env.GROQ_API_KEY
  const client = new Groq({
    apiKey: groqApiKey,
    dangerouslyAllowBrowser: true
  }) 

  return client
}
