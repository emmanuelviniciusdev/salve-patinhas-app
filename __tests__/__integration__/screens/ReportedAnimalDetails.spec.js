import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react-native"
import ReportedAnimalDetails from "../../../screens/ReportedAnimalDetails"
import routeNames from "../../../routes/routeNames"
import { Stack, TestContainer } from "../index"

const mockedNavigationGoBack = jest.fn()

jest.mock("@react-navigation/native", () => {
  const requireActual = jest.requireActual("@react-navigation/native")
  return {
    ...requireActual,
    useNavigation: () => ({
      goBack: mockedNavigationGoBack,
    }),
  }
})

/**
 * TODO: Mock API requests after implement backend.
 * For this, a library like Mirage can be used: https://miragejs.com/quickstarts/react-native/development/
 */

describe("ReportedAnimalDetails", () => {
  beforeEach(() => {
    render(
      <TestContainer>
        <Stack.Screen
          name={routeNames.REPORTED_ANIMAL_DETAILS}
          component={ReportedAnimalDetails}
          initialParams={{ coordinate: {} }}
        />
      </TestContainer>
    )
  })

  it("should load the animal details", async () => {
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

  it("should open the picture of the animal in fullscreen mode", async () => {
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("AppActivityIndicator")
    )

    /**
     * OBS.: "✕" is not a normal character like "X".
     */
    let closeModalButton = screen.queryByText("✕")
    expect(closeModalButton).toBeFalsy()

    fireEvent(screen.queryByTestId("ImageAnimalPicture"), "press")

    closeModalButton = screen.queryByText("✕")
    expect(closeModalButton).toBeTruthy()
  })

  it("should navigate back when the arrow back button is pressed", async () => {
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("AppActivityIndicator")
    )

    fireEvent(screen.getByTestId("navigateBackButton"), "press")

    expect(mockedNavigationGoBack).toHaveBeenCalledTimes(1)
  })
})
