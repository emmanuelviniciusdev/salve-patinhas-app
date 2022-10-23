import AppSafeAreaView from "../../components/AppSafeAreaView"
import AppScrollView from "../../components/AppScrollView"
import AppHeaderDefault from "../../components/AppHeaderDefault"
import AppButton from "../../components/AppButton"
import MdiPlusBoxOutlineSvg from "../../assets/icons/mdi_plus-box-outline.svg"
import { TextNoAnimalsFound, ViewMarginTop30, ViewMarginTop10 } from "./styles"
import { useEffect, useState } from "react"
import AppActivityIndicator from "../../components/AppActivityIndicator"
import { getAnimalsForAdoptionRegisteredByUserList } from "../../services/SalvePatinhas"
import { showErrorMessage } from "../../utils"
import CardAnimalDetails from "../../components/CardAnimalDetails"
import { useNavigation } from "@react-navigation/native"
import routeNames from "../../routes/routeNames"

export default function AnimalAdoptionRegistration() {
  const navigation = useNavigation()

  const [loadingRegisteredAnimals, setLoadingRegisteredAnimals] = useState(true)

  const [registeredAnimals, setRegisteredAnimals] = useState([])

  useEffect(() => {
    ;(async () => {
      setLoadingRegisteredAnimals(true)

      try {
        const response = await getAnimalsForAdoptionRegisteredByUserList("")
        setRegisteredAnimals(response.data)
      } catch {
        showErrorMessage(
          "Não foi possível obter a lista de animais cadastrados para adoção"
        )
      } finally {
        setLoadingRegisteredAnimals(false)
      }
    })()
  }, [])

  function handleRemoveAnimal(removedGuidAnimal) {
    const updatedRegisteredAnimals = registeredAnimals.filter(
      (animal) => animal.guid !== removedGuidAnimal
    )

    setRegisteredAnimals(updatedRegisteredAnimals)
  }

  if (loadingRegisteredAnimals) {
    return (
      <AppSafeAreaView>
        <AppActivityIndicator size={"large"} />
      </AppSafeAreaView>
    )
  }

  return (
    <AppSafeAreaView>
      <AppScrollView>
        <AppHeaderDefault title={"Animais cadastrados para adoção"} />
        <ViewMarginTop30>
          <AppButton
            styleVariant={"primary"}
            Icon={MdiPlusBoxOutlineSvg}
            text={"cadastrar um animal"}
            onPress={() =>
              navigation.navigate(routeNames.ANIMAL_ADOPTION_REGISTRATION_FORM)
            }
          />
        </ViewMarginTop30>
        <ViewMarginTop30>
          {registeredAnimals.length === 0 && (
            <TextNoAnimalsFound>
              Você não possui nenhum animal cadastrado para adoção
            </TextNoAnimalsFound>
          )}
          {registeredAnimals.length > 0 &&
            registeredAnimals.map((animal, index) => (
              <ViewMarginTop10 key={index}>
                <CardAnimalDetails
                  guidAnimal={animal.guid}
                  name={animal.name}
                  dateOfBirth={animal.dateOfBirth}
                  city={animal.city}
                  state={animal.state}
                  pictureUrl={animal.pictureUrl}
                  actionType={"deleteAnimal"}
                  onRemoveAnimal={handleRemoveAnimal}
                />
              </ViewMarginTop10>
            ))}
        </ViewMarginTop30>
      </AppScrollView>
    </AppSafeAreaView>
  )
}
