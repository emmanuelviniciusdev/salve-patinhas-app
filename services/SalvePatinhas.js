import axios from "axios"
import env from "../environmentVariables"

const customAxios = axios.create({
  baseURL: env.SALVE_PATINHAS_API,
  headers: {},
})

export async function getAnimalsForAdoption(currentPosition, total) {
  try {
    const response = await customAxios.get("animals-for-adoption", {
      params: { currentPosition, total },
    })

    return response.data
  } catch (e) {
    console.error(e)
    throw new Error(
      "Ocorreu um erro ao tentar obter lista de animais para adoção"
    )
  }
}

export async function postReportAnimal(data) {
  try {
    await customAxios.post("report-animal", data)
  } catch (e) {
    console.error(e)
    throw new Error("Ocorreu um erro ao reportar o animal")
  }
}
