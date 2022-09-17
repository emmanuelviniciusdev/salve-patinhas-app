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
        { latitude: -23.5329, longitude: -46.6874 },
        { latitude: -23.539, longitude: -46.6877 },
        { latitude: -23.5341, longitude: -46.688 },
        { latitude: -23.5345, longitude: -46.6885 },
      ]
    })

    this.get("reported-animal-details", () => {
      return {
        pictureUrl:
          "https://www.portaldoanimal.org/wp-content/uploads/2018/06/Cinco-pequenas-crian%C3%A7as-salvaram-sozinhas-cachorro-abandonado-em-rua-movimentada1.jpg",
        description:
          "Visto em frente ao Extra Abolição, aparenta estar magro e possuía uma coleira preta",
        address: "R. da Abolição, 2013 - Pte. Preta, Campinas - SP",
      }
    })
  },
})
