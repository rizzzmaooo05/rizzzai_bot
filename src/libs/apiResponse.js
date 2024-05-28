export default function apiResponse(error, data, message) {
  const response = {
    error,
    data,
    message
  }
  
  return response
}