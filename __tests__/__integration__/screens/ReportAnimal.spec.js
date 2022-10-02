import { createMockedServerTest } from "../../../mocks"
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react-native"
import { Stack, TestContainer } from "../index"
import routeNames from "../../../routes/routeNames"
import ReportAnimal from "../../../screens/ReportAnimal"
import * as useCurrentPosition from "../../../hooks/useCurrentPosition"
import * as useNavigation from "../../../hooks/useNavigation"

const mockedNavigationGoBack = jest.fn()

jest
  .spyOn(useCurrentPosition, "default")
  .mockReturnValue([true, { latitude: -18.8591751, longitude: -41.9536442 }])

jest
  .spyOn(useNavigation, "default")
  .mockReturnValue({ goBack: mockedNavigationGoBack })

jest.mock("expo-camera", () => ({
  Camera: jest.requireActual("../../__mocks__/CameraFromExpoCamera").default,
  requestCameraPermissionsAsync: async () => {},
}))

describe("ReportAnimal", () => {
  let server

  beforeEach(() => {
    server = createMockedServerTest()

    render(
      <TestContainer>
        <Stack.Screen
          name={routeNames.REPORT_ANIMAL}
          component={ReportAnimal}
        />
      </TestContainer>
    )
  })

  afterEach(() => {
    server.shutdown()
  })

  it("should render the formatted address by user's geolocation", async () => {
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("AppActivityIndicator")
    )

    const formattedUserAddress = screen.queryByText(
      "R. Afonso Pena, 3713 - Centro, Gov. Valadares - MG, 35010-002, Brasil"
    )

    expect(formattedUserAddress).toBeTruthy()
  })

  it("should successfully take a picture", async () => {
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("AppActivityIndicator")
    )

    /**
     * Opens camera to take the picture.
     */
    const btnOpenPhotoCapture = screen.getByTestId("AppButtonOpenTakePicture")
    fireEvent(btnOpenPhotoCapture, "press")

    /**
     * Awaits permissions to be loaded.
     */
    await waitForElementToBeRemoved(() =>
      screen.queryByText(
        "Por favor, forneça as permissões necessárias para acessar a câmera do dispositivo"
      )
    )

    /**
     * Takes the picture.
     */
    const btnPhotoCapture = screen.getByTestId("PressableTakePicture")
    fireEvent(btnPhotoCapture, "press")

    /**
     * After the picture is taken, the camera is closed and the screen contents are shown again.
     */
    await waitForElementToBeRemoved(() =>
      screen.getByTestId("CameraFromExpoCamera")
    )

    /**
     * The animal picture that was just taken is loaded and displayed where it should be displayed.
     */
    const animalPicture = screen.queryByTestId("ImageReportedAnimalPicture")
    expect(animalPicture).toBeTruthy()
  })

  it("should render a warning message if the user did not grant sufficient permissions", async () => {})

  it("should successfully report the animal after taking a picture and specifying a description", async () => {})

  it("should successfully report the animal without needing to take a picture or specify a description", async () => {})
})
