import axios from "axios"
import env from "../environmentVariables"

const customAxios = axios.create({
  baseURL: env.GOOGLE_MAPS_API,
  headers: {
    "Accept-Language": "pt-BR",
  },
})

export async function getAddressByCoordinates(latitude, longitude) {
  const params = {
    key: env.GOOGLE_MAPS_GEOCODING_API_KEY,
    latlng: `${latitude},${longitude}`,
  }

  let response

  try {
    response = await customAxios.get(`maps/api/geocode/json`, { params })

    if (response.data.status !== "OK") {
      throw new Error(response.data)
    }
  } catch (e) {
    console.error(e)
    throw new Error("Ocorreu um erro ao tentar obter endereço")
  }

  const results = response.data.results ?? [{}]

  return results[0].formatted_address ?? "-"
}
