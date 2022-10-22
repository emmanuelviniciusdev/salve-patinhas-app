import {
  fireEvent,
  render,
  screen,
  act,
  waitForElementToBeRemoved,
} from "@testing-library/react-native"
import { Stack, TestContainer } from "../index"
import routeNames from "../../../routes/routeNames"
import ReportAnimal from "../../../screens/ReportAnimal"
import * as useCurrentPosition from "../../../hooks/useCurrentPosition"
import * as useNavigation from "../../../hooks/useNavigation"
import CameraFromExpoCamera from "../../__mocks__/CameraFromExpoCamera"
import * as SalvePatinhasService from "../../../services/SalvePatinhas"
import * as GoogleMapsService from "../../../services/GoogleMaps"

const mockedNavigationGoBack = jest.fn()

jest.mock("expo-camera", () => ({
  Camera: jest.requireActual("../../__mocks__/CameraFromExpoCamera").default,
  requestCameraPermissionsAsync: async () => {},
}))

describe("ReportAnimal", () => {
  beforeEach(() => {
    jest
      .spyOn(useCurrentPosition, "default")
      .mockReturnValue([
        true,
        { coords: { latitude: -18.8591751, longitude: -41.9536442 } },
      ])

    jest
      .spyOn(useNavigation, "default")
      .mockReturnValue({ goBack: mockedNavigationGoBack })

    jest.spyOn(SalvePatinhasService, "postReportAnimal").mockResolvedValue(true)

    jest
      .spyOn(GoogleMapsService, "getAddressByCoordinates")
      .mockResolvedValue(
        "R. Afonso Pena, 3713 - Centro, Gov. Valadares - MG, 35010-002, Brasil"
      )

    renderScreen()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  function renderScreen() {
    render(
      <TestContainer>
        <Stack.Screen
          name={routeNames.REPORT_ANIMAL}
          component={ReportAnimal}
        />
      </TestContainer>
    )
  }

  async function _testTakePictureFlow() {
    /**
     * Opens camera to take the picture.
     */
    const btnOpenPhotoCapture = screen.getByTestId("AppButtonOpenTakePicture")
    fireEvent(btnOpenPhotoCapture, "press")

    /**
     * Awaits permissions to be loaded.
     */
    await waitForElementToBeRemoved(() =>
      screen.getByText(
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
  }

  async function waitLoadScreen() {
    await waitForElementToBeRemoved(() =>
      screen.getByTestId("AppActivityIndicator")
    )
  }

  it("should render the formatted address by user's geolocation", async () => {
    await waitLoadScreen()

    const formattedUserAddress = screen.queryByText(
      "R. Afonso Pena, 3713 - Centro, Gov. Valadares - MG, 35010-002, Brasil"
    )

    expect(formattedUserAddress).toBeTruthy()
  })

  it("should successfully take a picture", async () => {
    await waitLoadScreen()
    await _testTakePictureFlow()
  })

  it("should successfully report the animal after taking a picture and specifying a description", async () => {
    await waitLoadScreen()

    await _testTakePictureFlow()

    const descriptionInput = screen.getByPlaceholderText(
      "Dê detalhes sobre o animal avistado"
    )
    fireEvent(
      descriptionInput,
      "changeText",
      "Estava com uma ferida na orelha..."
    )

    const btnReport = screen.getByTestId("AppButtonReportAnimal")
    fireEvent(btnReport, "press")

    await act(() => {})

    const successMessage = screen.queryByText("Animal reportado com sucesso")
    expect(successMessage).toBeTruthy()

    expect(mockedNavigationGoBack).toBeCalledTimes(1)
  })

  it("should successfully report the animal without needing to take a picture or specify a description", async () => {
    await waitLoadScreen()

    const btnReport = screen.getByTestId("AppButtonReportAnimal")
    fireEvent(btnReport, "press")

    await act(() => {})

    const successMessage = screen.queryByText("Animal reportado com sucesso")
    expect(successMessage).toBeTruthy()

    expect(mockedNavigationGoBack).toBeCalledTimes(1)
  })
})
