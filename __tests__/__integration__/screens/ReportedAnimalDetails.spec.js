import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react-native"
import ReportedAnimalDetails from "../../../screens/ReportedAnimalDetails"
import routeNames from "../../../routes/routeNames"
import { Stack, TestContainer } from "../index"
import * as useNavigation from "../../../hooks/useNavigation"
import * as SalvePatinhasService from "../../../services/SalvePatinhas"

const mockedNavigationGoBack = jest.fn()

jest
  .spyOn(useNavigation, "default")
  .mockReturnValue({ goBack: mockedNavigationGoBack })

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
      "Visto em frente ao Extra Abolição, aparenta estar magro e possuía uma coleira preta"
    )
    expect(reportedAnimalDescription).toBeTruthy()

    const reportedAnimalAddress = screen.queryByText(
      "R. da Abolição, 2013 - Pte. Preta, Campinas - SP"
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
