import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react-native"
import { Stack, TestContainer } from "../index"
import routeNames from "../../../routes/routeNames"
import AnimalAdoptionRegistration from "../../../screens/AnimalAdoptionRegistration"
import * as SalvePatinhasService from "../../../services/SalvePatinhas"

describe("AnimalAdoptionRegistration", () => {
  it("should render the list of animals registered by the user", async () => {
    jest
      .spyOn(SalvePatinhasService, "getAnimalsForAdoptionRegisteredByUserList")
      .mockResolvedValue({
        status: 200,
        data: [
          {
            name: "Tobias",
            pictureUrl:
              "https://www.zooplus.ie/magazine/wp-content/uploads/2018/06/rough-collie-ie.jpg",
            dateOfBirth: "2022-01-01",
            city: "São Paulo",
            state: "SP",
          },
          {
            name: "Lola",
            pictureUrl:
              "https://grapee.jp/en/wp-content/uploads/74311_main1.jpg",
            dateOfBirth: "2016-08-25",
            city: "Campinas",
            state: "SP",
          },
        ],
      })

    render(
      <TestContainer>
        <Stack.Screen
          name={routeNames.ANIMAL_ADOPTION_REGISTRATION}
          component={AnimalAdoptionRegistration}
        />
      </TestContainer>
    )

    await waitForElementToBeRemoved(() =>
      screen.getByTestId("AppActivityIndicator")
    )

    expect(screen.queryAllByTestId("CardAnimalDetails").length).toBe(2)

    expect(screen.queryByText("Tobias, 9 meses")).toBeTruthy()
    expect(screen.queryByText("São Paulo, SP")).toBeTruthy()

    expect(screen.queryByText("Lola, 6 anos")).toBeTruthy()
    expect(screen.queryByText("Campinas, SP")).toBeTruthy()
  })

  it("should render a warning message if the user has not registered any animals", async () => {
    jest
      .spyOn(SalvePatinhasService, "getAnimalsForAdoptionRegisteredByUserList")
      .mockResolvedValue({
        status: 200,
        data: [],
      })

    render(
      <TestContainer>
        <Stack.Screen
          name={routeNames.ANIMAL_ADOPTION_REGISTRATION}
          component={AnimalAdoptionRegistration}
        />
      </TestContainer>
    )

    await waitForElementToBeRemoved(() =>
      screen.getByTestId("AppActivityIndicator")
    )

    expect(
      screen.queryByText("Você não possui nenhum animal cadastrado para adoção")
    ).toBeTruthy()
  })
})
