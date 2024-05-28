import models from '../models/models.js'
import apiResponse from '../libs/apiResponse.js'

export default async function handleChat(req, res) {
  const { chatMessage } = req.body

  const client = models.groqCLient()
  try {
    const groq = await client.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: chatMessage
        }
      ],
      model: 'llama3-70b-8192',
      temperature: 0.1,
    })
  
    const data = groq.choices[0].message.content
    const response = apiResponse(
      false,
      data,
      'Berhasil mendapat response dari API!'
    )
    res
      .status(200)
      .send(response)
  }
  catch {
    const response = apiResponse(
      true,
      '',
      'Gagal mendapat response dari API!'
    )
    res
      .status(400)
      .send(response)
  }
}