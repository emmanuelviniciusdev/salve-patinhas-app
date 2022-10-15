import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react-native"
import { Stack, TestContainer } from "../index"
import routeNames from "../../../routes/routeNames"
import AnimalAdoptionDetails from "../../../screens/AnimalAdoptionDetails"
import * as SalvePatinhasService from "../../../services/SalvePatinhas"
import timekeeper from "timekeeper"

jest
  .spyOn(SalvePatinhasService, "getAnimalForAdoptionDetails")
  .mockResolvedValue({
    status: 200,
    data: {
      listPictureUrl: [
        "https://i.imgur.com/kPp9kVw.jpg",
        "https://i.imgur.com/hzGycVD.jpg",
      ],
      species: "cão",
      name: "Lola",
      dateOfBirth: "2016-08-31",
      description: "Lorem ipsum dolor sit amet!",
      contactInformation: {
        name: "Rafaela Castanho",
        phone: "+5511911111111",
        email: "rafaela.castanho97@icloud.com",
      },
    },
  })

describe("AnimalAdoptionDetails", () => {
  beforeAll(() => {
    timekeeper.freeze(new Date("2022-11-01"))
  })

  afterAll(() => {
    timekeeper.reset()
  })

  beforeEach(() => {
    render(
      <TestContainer>
        <Stack.Screen
          name={routeNames.ANIMAL_ADOPTION_DETAILS}
          component={AnimalAdoptionDetails}
        />
      </TestContainer>
    )
  })

  it("should render animal details", async () => {
    await waitForElementToBeRemoved(() =>
      screen.getByTestId("AppActivityIndicator")
    )

    expect(screen.queryByText("Sobre o cão")).toBeTruthy()

    /**
     * Expects 2 images to appear in the slide
     */
    expect(
      screen.queryAllByTestId("SlideAnimalAdoptionImageThumbnail").length
    ).toBe(2)

    expect(screen.queryByText("Lola")).toBeTruthy()
    expect(screen.queryByText("6 anos")).toBeTruthy()
    expect(screen.queryByText("Lorem ipsum dolor sit amet!")).toBeTruthy()

    expect(screen.queryByText("Rafaela Castanho")).toBeTruthy()
    expect(screen.queryByText("+5511911111111")).toBeTruthy()
    expect(screen.queryByText("rafaela.castanho97@icloud.com")).toBeTruthy()
  })
})
