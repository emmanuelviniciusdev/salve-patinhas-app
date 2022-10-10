import { createMockedServerTest } from "../../../mocks"
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
  act,
} from "@testing-library/react-native"
import { Stack, TestContainer } from "../index"
import routeNames from "../../../routes/routeNames"
import AnimalAdoptionList from "../../../screens/AnimalAdoptionList"

describe("AnimalAdoptionList", () => {
  let server

  beforeEach(() => {
    server = createMockedServerTest()

    render(
      <TestContainer>
        <Stack.Screen
          name={routeNames.ANIMAL_ADOPTION_LIST}
          component={AnimalAdoptionList}
        />
      </TestContainer>
    )
  })

  afterEach(() => {
    server.shutdown()
  })

  it("should render 30 cards of animals when the screen is opened by the first time", async () => {
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("AppActivityIndicator")
    )

    const cards = screen.queryAllByTestId("CardAnimalDetails")
    expect(cards.length).toBe(30)
  })

  it("it should render more 30 cards of animals when the load more button is pressed", async () => {
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("AppActivityIndicator")
    )

    const loadMoreButton = screen.getByTestId("AppButtonLoadMoreAnimals")
    fireEvent(loadMoreButton, "press")

    await act(() => {})

    const cards = screen.queryAllByTestId("CardAnimalDetails")
    expect(cards.length).toBe(60)
  })
})
