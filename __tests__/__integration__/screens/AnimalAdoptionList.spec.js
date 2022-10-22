import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react-native"
import { Stack, TestContainer } from "../index"
import routeNames from "../../../routes/routeNames"
import AnimalAdoptionList from "../../../screens/AnimalAdoptionList"

describe("AnimalAdoptionList", () => {
  beforeEach(() => {
    render(
      <TestContainer>
        <Stack.Screen
          name={routeNames.ANIMAL_ADOPTION_LIST}
          component={AnimalAdoptionList}
        />
      </TestContainer>
    )
  })

  it("should render 15 cards of animals when the screen is opened by the first time", async () => {
    await waitForElementToBeRemoved(() =>
      screen.getByTestId("AppActivityIndicator")
    )

    const cards = screen.queryAllByTestId("CardAnimalDetails")
    expect(cards.length).toBe(15)
  })

  it("should render 30 cards after load more button is pressed", async () => {
    await waitForElementToBeRemoved(() =>
      screen.getByTestId("AppActivityIndicator")
    )

    const loadMoreButton = screen.getByTestId("AppButtonLoadMoreAnimals")
    fireEvent(loadMoreButton, "press")

    await waitForElementToBeRemoved(() =>
      screen.getByTestId("AppButtonLoadingIcon")
    )

    const cards = screen.queryAllByTestId("CardAnimalDetails")
    expect(cards.length).toBe(30)
  })
})
