import AppSafeAreaView from "../../components/AppSafeAreaView"
import AppScrollView from "../../components/AppScrollView"
import AppHeaderDefault from "../../components/AppHeaderDefault"
import UploadPhotos from "../../components/UploadPhotos"
import { MarginTop10, MarginTop50, MarginY10, TextTitle } from "./styles"
import AppTextInput from "../../components/AppTextInput"
import AppSelectInput from "../../components/AppSelectInput"
import AppButton from "../../components/AppButton"
import MdiContentSaveSvg from "../../assets/icons/mdi_content-save.svg"
import { useState } from "react"
import { Masks } from "react-native-mask-input"
import {
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage,
} from "../../utils"
import { postAnimalForAdoption } from "../../services/SalvePatinhas"
import { useNavigation } from "@react-navigation/native"
import routeNames from "../../routes/routeNames"

export default function AnimalAdoptionRegistrationForm() {
  const navigation = useNavigation()

  const [listAnimalPictureBase64URI, setListAnimalPictureBase64URI] = useState(
    []
  )

  const [animalName, setAnimalName] = useState("")

  const [animalDateOfBirth, setAnimalDateOfBirth] = useState("")

  const [animalSpecies, setAnimalSpecies] = useState("")

  const [animalDescription, setAnimalDescription] = useState("")

  const [ownerName, setOwnerName] = useState("")

  const [ownerEmail, setOwnerEmail] = useState("")

  const [ownerPhone, setOwnerPhone] = useState("")

  const [loadingRegisterAnimal, setLoadingRegisterAnimal] = useState(false)

  const itemsSpecies = [
    { label: "Cão", value: "Cão" },
    { label: "Gato", value: "Gato" },
  ]

  function handleSelectImage(selectedImages) {
    setListAnimalPictureBase64URI(
      selectedImages.map(({ base64URI }) => base64URI)
    )
  }

  function generateDataRegisterAnimal() {
    if (listAnimalPictureBase64URI.length === 0) {
      throw new Error("É necessário selecionar ao menos uma foto do animal")
    }

    if (animalName.trim() === "") {
      throw new Error("O nome do animal é obrigatório")
    }

    if (animalDateOfBirth.trim() === "") {
      throw new Error("A data de nascimento do animal é obrigatório")
    }

    if (animalSpecies.trim() === "") {
      throw new Error("A espécie do animal é obrigatória")
    }

    if (animalDescription.trim() === "") {
      throw new Error("A descrição sobre o animal é obrigatória")
    }

    if (ownerName.trim() === "") {
      throw new Error("O nome do dono é obrigatório")
    }

    if (ownerEmail.trim() === "") {
      throw new Error("O e-mail do dono é obrigatório")
    }

    if (ownerPhone.trim() === "") {
      throw new Error("O número de celular do dono é obrigatório")
    }

    return {
      listPictureBase64URI: listAnimalPictureBase64URI,
      name: animalName,
      dateOfBirth: animalDateOfBirth,
      species: animalSpecies,
      description: animalDescription,
      contactInformation: {
        name: ownerName,
        email: ownerEmail,
        phone: ownerPhone,
      },
    }
  }

  async function registerAnimal() {
    let data

    try {
      data = generateDataRegisterAnimal()
    } catch (error) {
      showWarningMessage(error.message)
    }

    if (!data) {
      return
    }

    setLoadingRegisterAnimal(true)

    try {
      await postAnimalForAdoption(data)
      showSuccessMessage("Animal cadastrado com sucesso")
      navigation.navigate(routeNames.ANIMAL_ADOPTION_REGISTRATION)
    } catch {
      showErrorMessage("Não foi possível cadastrar o animal para adoção")
    } finally {
      setLoadingRegisterAnimal(false)
    }
  }

  return (
    <AppSafeAreaView>
      <AppScrollView>
        <AppHeaderDefault title={"Cadastrar animal para adoção"} />
        <MarginTop50>
          <TextTitle>Informações sobre o animal</TextTitle>
        </MarginTop50>
        <UploadPhotos
          label={"Fotos do animal *"}
          onSelectImage={handleSelectImage}
        />
        <MarginTop10>
          <AppTextInput
            label={"Nome do Animal *"}
            placeholder={"Nome do Animal"}
            onChangeText={setAnimalName}
          />
        </MarginTop10>
        <MarginTop10>
          <AppTextInput
            label={"Data de Nascimento *"}
            placeholder={"DD/MM/AAAA"}
            mask={Masks.DATE_DDMMYYYY}
            onChangeText={setAnimalDateOfBirth}
          />
        </MarginTop10>
        <MarginTop10>
          <AppSelectInput
            label={"Espécie *"}
            items={itemsSpecies}
            selectedValue={animalSpecies}
            onValueChange={setAnimalSpecies}
          />
        </MarginTop10>
        <MarginTop10>
          <AppTextInput
            label={"Descrição *"}
            placeholder={"Descrição"}
            isTextarea
            maxLength={1000}
            onChangeText={setAnimalDescription}
          />
        </MarginTop10>
        <MarginTop50>
          <TextTitle>Informações de contato</TextTitle>
        </MarginTop50>
        <AppTextInput
          label={"Nome *"}
          placeholder={"Nome"}
          onChangeText={setOwnerName}
        />
        <MarginTop10>
          <AppTextInput
            label={"E-mail *"}
            placeholder={"E-mail"}
            onChangeText={setOwnerEmail}
          />
        </MarginTop10>
        <MarginTop10>
          <AppTextInput
            label={"Celular *"}
            placeholder={"(99) 99999-9999"}
            mask={Masks.BRL_PHONE}
            onChangeText={setOwnerPhone}
          />
        </MarginTop10>
        <MarginY10>
          <AppButton
            styleVariant={"primary"}
            Icon={MdiContentSaveSvg}
            text={"cadastrar"}
            loading={loadingRegisterAnimal}
            disabled={loadingRegisterAnimal}
            onPress={registerAnimal}
          />
        </MarginY10>
      </AppScrollView>
    </AppSafeAreaView>
  )
}
