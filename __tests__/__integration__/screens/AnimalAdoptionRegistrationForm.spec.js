import {
  fireEvent,
  render,
  screen,
  act,
  waitForElementToBeRemoved,
} from "@testing-library/react-native"
import { Stack, TestContainer } from "../index"
import routeNames from "../../../routes/routeNames"
import AnimalAdoptionRegistrationForm from "../../../screens/AnimalAdoptionRegistrationForm"
import * as SalvePatinhasService from "../../../services/SalvePatinhas"
import * as ImagePicker from "expo-image-picker"
import * as useNavigation from "../../../hooks/useNavigation"

const mockedNavigate = jest.fn()

jest
  .spyOn(useNavigation, "default")
  .mockReturnValue({ navigate: mockedNavigate })

jest
  .spyOn(SalvePatinhasService, "postAnimalForAdoption")
  .mockResolvedValue({ status: 201 })

describe("AnimalAdoptionRegistrationForm", () => {
  beforeEach(() => {
    render(
      <TestContainer>
        <Stack.Screen
          name={routeNames.ANIMAL_ADOPTION_REGISTRATION_FORM}
          component={AnimalAdoptionRegistrationForm}
        />
      </TestContainer>
    )
  })

  async function _fillFormFields(selectPhotos = true) {
    const photosMetadata = Array.from({ length: 4 }).map(() => ({
      base64: "Vml2YSBTYWx2ZSBQYXRpbmhhcyEh",
    }))

    const responseLaunchImageLibraryAsync = selectPhotos
      ? { cancelled: false, selected: photosMetadata }
      : { cancelled: true }

    jest
      .spyOn(ImagePicker, "launchImageLibraryAsync")
      .mockResolvedValue(responseLaunchImageLibraryAsync)

    const btnAddImage = screen.getByTestId("UploadPhotosPressableAddImage")
    fireEvent(btnAddImage, "press")

    if (selectPhotos) {
      await waitForElementToBeRemoved(() =>
        screen.getByTestId("UploadPhotosPressableAddImage")
      )
    }

    fireEvent(
      screen.getByPlaceholderText("Nome do Animal"),
      "changeText",
      "Tobias"
    )

    fireEvent(
      screen.getByPlaceholderText("DD/MM/AAAA"),
      "changeText",
      "01012017"
    )

    fireEvent(
      screen.getByTestId("AppSelectInputAnimalSpecies"),
      "onValueChange",
      "Cão"
    )

    fireEvent(
      screen.getByPlaceholderText("Descrição"),
      "changeText",
      "Cachorro adorável!"
    )

    fireEvent(
      screen.getByPlaceholderText("Nome"),
      "changeText",
      "Emmanuel Vinícius"
    )

    fireEvent(
      screen.getByPlaceholderText("E-mail"),
      "changeText",
      "teste@email.com"
    )

    fireEvent(
      screen.getByPlaceholderText("(99) 99999-9999"),
      "changeText",
      "11111111111"
    )
  }

  it("should display a warning message if some required information was not specified", async () => {
    await _fillFormFields(false)

    fireEvent(screen.getByTestId("AppButtonRegisterAnimal"), "press")

    await act(() => {})

    expect(
      screen.getByText("É necessário selecionar ao menos uma foto do animal")
    ).toBeTruthy()
  })

  it("should register the animal successfully", async () => {
    await _fillFormFields()

    fireEvent(screen.getByTestId("AppButtonRegisterAnimal"), "press")

    await act(() => {})

    expect(screen.getByText("Animal cadastrado com sucesso")).toBeTruthy()

    expect(mockedNavigate).toBeCalledTimes(1)
  })
})
