import axios from "axios"
import env from "../environmentVariables"
import Timeout from "await-timeout"

const customAxios = axios.create({
  baseURL: env.SALVE_PATINHAS_API,
  headers: {},
})

export async function getReportedAnimalDetails(guid) {
  await Timeout.set(500)

  return {
    status: 200,
    data: {
      pictureUrl:
        "https://www.portaldoanimal.org/wp-content/uploads/2018/06/Cinco-pequenas-crian%C3%A7as-salvaram-sozinhas-cachorro-abandonado-em-rua-movimentada1.jpg",
      description:
        "Visto em frente ao Extra Abolição, aparenta estar magro e possuía uma coleira preta",
      address: "R. da Abolição, 2013 - Pte. Preta, Campinas - SP",
    },
  }
}

export async function getReportedAnimalsCoordsList(latitude, longitude) {
  await Timeout.set(500)

  return {
    status: 200,
    data: [
      { guid: "", latitude: -23.5329, longitude: -46.6874 },
      { guid: "", latitude: -23.539, longitude: -46.6877 },
      { guid: "", latitude: -23.5341, longitude: -46.688 },
      { guid: "", latitude: -23.5345, longitude: -46.6885 },
    ],
  }
}

export async function postAnimalForAdoption(data) {
  return {
    status: 201,
    data: {
      listPictureUrl: [
        "https://i.imgur.com/kPp9kVw.jpg",
        "https://i.imgur.com/hzGycVD.jpg",
        "https://i.imgur.com/RuYMljC.jpg",
      ],
      species: "cão",
      name: "Tobias",
      dateOfBirth: "2019-04-04",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque enim eget pulvinar maximus. Quisque rhoncus ut orci blandit condimentum.",
      contactInformation: {
        name: "João Vitor",
        phone: "+5511900000000",
        email: "joao.vitor@icloud.com",
      },
    },
  }
}

export async function getAnimalsForAdoptionRegisteredByUserList(guidUser) {
  const animals = Array.from({ length: 2 }).map((_, index) =>
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
          pictureUrl: "https://grapee.jp/en/wp-content/uploads/74311_main1.jpg",
          dateOfBirth: "2016-08-25",
          city: "Campinas",
          state: "SP",
        }
  )

  return { status: 200, data: animals }
}

/**
 * GET animals-for-adoption/{guid}
 *
 * Response: { listPictureUrl: Array<string>; species: string; name: string; dateOfBirth: date; description: string;
 *             contactInformation: { name: string; email: string; phone: string; }; }
 */
export async function getAnimalForAdoptionDetails(guidAnimal) {
  return {
    status: 200,
    data: {
      listPictureUrl: [
        "https://i.imgur.com/kPp9kVw.jpg",
        "https://i.imgur.com/hzGycVD.jpg",
        "https://i.imgur.com/RuYMljC.jpg",
      ],
      species: "cão",
      name: "Tobias",
      dateOfBirth: "2019-04-04",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque enim eget pulvinar maximus. Quisque rhoncus ut orci blandit condimentum.",
      contactInformation: {
        name: "João Vitor",
        phone: "+5511900000000",
        email: "joao.vitor@icloud.com",
      },
    },
  }
}

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
