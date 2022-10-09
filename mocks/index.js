import env from "../environmentVariables"

import { createServer } from "miragejs"

export function createMockedServer(environment = "development") {
  return createServer({
    environment,

    routes() {
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

      this.post(`${env.SALVE_PATINHAS_API}/report-animal`, () => {})

      this.get(
        `${env.SALVE_PATINHAS_API}/animals-for-adoption`,
        (_, request) => {
          const { total } = request.queryParams

          const animals = Array.from({ length: total }).map((_, index) =>
            index % 2 === 0
              ? {
                  name: "Tobias",
                  pictureUrl:
                    "https://www.zooplus.ie/magazine/wp-content/uploads/2018/06/rough-collie-ie.jpg",
                  dateOfBirth: "2022-01-01",
                  city: "São Paulo",
                  state: "SP",
                }
              : {
                  name: "Lola",
                  pictureUrl:
                    "https://grapee.jp/en/wp-content/uploads/74311_main1.jpg",
                  dateOfBirth: "2016-08-25",
                  city: "Campinas",
                  state: "SP",
                }
          )

          return animals
        }
      )

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
