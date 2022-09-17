import env from "../environment"

import { createServer } from "miragejs"

if (window.server) {
  server.shutdown()
}

window.server = createServer({
  routes() {
    this.urlPrefix = env.SALVE_PATINHAS_API

    this.get(`reported-animals`, () => {
      return [
        { latitude: 0, longitude: 0 },
        { latitude: 0, longitude: 0 },
        { latitude: 0, longitude: 0 },
        { latitude: 0, longitude: 0 },
      ]
    })

    this.get("reported-animal-details", () => {
      return { pictureUrl: "", description: "", address: "" }
    })
  },
})
