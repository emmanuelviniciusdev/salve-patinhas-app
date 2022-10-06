import axios from "axios"
import env from "../environmentVariables"

const customAxios = axios.create({
  baseURL: env.SALVE_PATINHAS_API,
  headers: {},
})

export async function postReportAnimal(data) {
  try {
    await customAxios.post("report-animal", data)
  } catch (e) {
    console.error(e)
    throw new Error("Ocorreu um erro ao reportar o animal")
  }
}
