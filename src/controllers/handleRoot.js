import apiResponse from '../libs/apiResponse.js'

export default function handleRoot(req, res) {
  const response = apiResponse(
    false,
    '',
    'Server running!'
  )
  res
    .status(200)
    .send(response)
}