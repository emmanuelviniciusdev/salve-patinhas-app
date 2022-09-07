import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react-native"
import ReportedAnimalDetails from "../../../screens/ReportedAnimalDetails"
import routeNames from "../../../routes/routeNames"
import { Stack, TestContainer } from "../index"

/**
 * TODO: Mock API requests after implement backend.
 * For this, a library like Mirage can be used: https://miragejs.com/quickstarts/react-native/development/
 */

describe("ReportedAnimalDetails", () => {
  it("should load the animal details", async () => {
    const testContainer = (
      <TestContainer>
        <Stack.Screen
          name={routeNames.REPORTED_ANIMAL_DETAILS}
          component={ReportedAnimalDetails}
          initialParams={{ coordinate: {} }}
        />
      </TestContainer>
    )

    render(testContainer)

    const loadingIndicator = screen.queryByTestId("AppActivityIndicator")

    expect(loadingIndicator).toBeTruthy()

    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("AppActivityIndicator")
    )

    const reportedAnimalPicture = screen.queryByTestId("ImageAnimalPicture")
    expect(reportedAnimalPicture).toBeTruthy()

    const reportedAnimalDescription = screen.queryByText(
      "Tinha uma coleira vermelha. Bem cuidado. Parece ter algum dono!"
    )
    expect(reportedAnimalDescription).toBeTruthy()

    const reportedAnimalAddress = screen.queryByText(
      "Rua Clodovaldo, Jd. Paraíso, Campinas, SP"
    )
    expect(reportedAnimalAddress).toBeTruthy()
  })

  it("should open the picture of the animal in fullscreen mode", () => {})

  it("should navigate back when the arrow back button is pressed", () => {})
})
