import env from "../environmentVariables"

import { createServer } from "miragejs"

export function createMockedServer(environment = "development") {
  return createServer({
    environment,

    routes() {
      this.post(`${env.SALVE_PATINHAS_API}/report-animal`, () => {})

      this.get(`${env.SALVE_PATINHAS_API}/reported-animals`, () => {
        return [
          { latitude: -23.5329, longitude: -46.6874 },
          { latitude: -23.539, longitude: -46.6877 },
          { latitude: -23.5341, longitude: -46.688 },
          { latitude: -23.5345, longitude: -46.6885 },
        ]
      })

      this.get(`${env.SALVE_PATINHAS_API}/reported-animal-details`, () => {
        return {
          pictureUrl:
            "https://www.portaldoanimal.org/wp-content/uploads/2018/06/Cinco-pequenas-crian%C3%A7as-salvaram-sozinhas-cachorro-abandonado-em-rua-movimentada1.jpg",
          description:
            "Visto em frente ao Extra Abolição, aparenta estar magro e possuía uma coleira preta",
          address: "R. da Abolição, 2013 - Pte. Preta, Campinas - SP",
        }
      })

      this.get(`${env.GOOGLE_MAPS_API}/maps/api/geocode/json`, () => {
        return {
          status: "OK",
          results: [
            {
              formatted_address:
                "R. Afonso Pena, 3713 - Centro, Gov. Valadares - MG, 35010-002, Brasil",
            },
          ],
        }
      })

      /**
       * Uncomment to test the APIs.
       */
      // this.passthrough(`${env.GOOGLE_MAPS_API}/**`)
    },
  })
}

export function createMockedServerTest() {
  return createMockedServer("test")
}
