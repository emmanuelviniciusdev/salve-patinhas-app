import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react-native"
import { Stack, TestContainer } from "../index"
import AnimalLocation from "../../../screens/AnimalLocation"
import routeNames from "../../../routes/routeNames"
import * as SalvePatinhasService from "../../../services/SalvePatinhas"

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

jest
  .spyOn(SalvePatinhasService, "getReportedAnimalsCoordsList")
  .mockResolvedValue({
    status: 200,
    data: [
      { guid: "", latitude: -23.5329, longitude: -46.6874 },
      { guid: "", latitude: -23.539, longitude: -46.6877 },
      { guid: "", latitude: -23.5341, longitude: -46.688 },
      { guid: "", latitude: -23.5345, longitude: -46.6885 },
    ],
  })

jest.spyOn(SalvePatinhasService, "getReportedAnimalDetails").mockResolvedValue({
  status: 200,
  data: {
    pictureUrl:
      "https://www.portaldoanimal.org/wp-content/uploads/2018/06/Cinco-pequenas-crian%C3%A7as-salvaram-sozinhas-cachorro-abandonado-em-rua-movimentada1.jpg",
    description:
      "Visto em frente ao Extra Abolição, aparenta estar magro e possuía uma coleira preta",
    address: "R. da Abolição, 2013 - Pte. Preta, Campinas - SP",
  },
})

describe("AnimalLocation", () => {
  beforeEach(() => {
    render(
      <TestContainer>
        <Stack.Screen
          name={routeNames.ANIMAL_LOCATION}
          component={AnimalLocation}
        />
      </TestContainer>
    )
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
