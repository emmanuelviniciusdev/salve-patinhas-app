import axios from "axios"
import env from "../environmentVariables"

const customAxios = axios.create({
  baseURL: env.SALVE_PATINHAS_API,
  headers: {},
})
