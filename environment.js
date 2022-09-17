import environtmentDEV from "./environment.dev"
import environtmentPRD from "./environment.prd"

export default __DEV__ ? environtmentDEV : environtmentPRD
