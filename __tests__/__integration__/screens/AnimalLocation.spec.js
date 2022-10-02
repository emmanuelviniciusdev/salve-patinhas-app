import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react-native"
import { Stack, TestContainer } from "../index"
import AnimalLocation from "../../../screens/AnimalLocation"
import routeNames from "../../../routes/routeNames"
import { createMockedServerTest } from "../../../mocks"

const jestRequireActualExpoLocation = jest.requireActual("expo-location")

jest
  .spyOn(jestRequireActualExpoLocation, "requestForegroundPermissionsAsync")
  .mockReturnValue(async () => ({
    granted: true,
  }))

jest
  .spyOn(jestRequireActualExpoLocation, "getCurrentPositionAsync")
  .mockReturnValue(async () => ({
    coords: { latitude: -18.8591751, longitude: -41.9536442 },
  }))

describe("AnimalLocation", () => {
  let server

  beforeEach(() => {
    server = createMockedServerTest()

    render(
      <TestContainer>
        <Stack.Screen
          name={routeNames.ANIMAL_LOCATION}
          component={AnimalLocation}
        />
      </TestContainer>
    )
  })

  afterEach(() => {
    server.shutdown()
  })

  it("should open animal pre-details when the user clicks on some indicator", async () => {
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("AppActivityIndicator")
    )

    const [firstSignalMarker] = screen.getAllByTestId("ReportSignalMarkerIcon")

    fireEvent(firstSignalMarker, "press")

    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("AppActivityIndicator")
    )

    expect(screen.queryByTestId("ImageAnimalPicture")).toBeTruthy()
    expect(
      screen.queryByText(
        "Visto em frente ao Extra Abolição, aparenta estar ma..."
      )
    ).toBeTruthy()
    expect(
      screen.queryByText("R. da Abolição, 2013 - Pte. Preta, Ca...")
    ).toBeTruthy()
  })

  it("should close animal pre-details when the user clicks on the map", async () => {
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("AppActivityIndicator")
    )

    const [firstSignalMarker] = screen.getAllByTestId("ReportSignalMarkerIcon")

    fireEvent(firstSignalMarker, "press")

    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("AppActivityIndicator")
    )

    expect(
      screen.queryByTestId("ViewContentReportedAnimalPreDetails")
    ).toBeTruthy()

    fireEvent(screen.getByTestId("MapView"), "press")

    expect(
      screen.queryByTestId("ViewContentReportedAnimalPreDetails")
    ).toBeFalsy()
  })
})
