import axios from "axios"
import env from "../environment"

export default axios.create({
  baseURL: env.SALVE_PATINHAS_API,
  headers: {},
})
