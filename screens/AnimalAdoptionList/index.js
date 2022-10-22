import AppSafeAreaView from "../../components/AppSafeAreaView"
import AppHeaderDefault from "../../components/AppHeaderDefault"
import AppScrollView from "../../components/AppScrollView"
import AppButton from "../../components/AppButton"
import MdiFilterSvg from "../../assets/icons/mdi_filter.svg"
import MdiReloadSvg from "../../assets/icons/mdi_reload.svg"
import { ViewMarginTop10, ViewMarginTop20, ViewMarginY20 } from "./styles"
import CardAnimalDetails from "../../components/CardAnimalDetails"
import { useEffect, useState } from "react"
import FiltersAnimalAdoptionList from "../../components/FiltersAnimalAdoptionList"
import { getAnimalsForAdoption } from "../../services/SalvePatinhas"
import { showErrorMessage } from "../../utils"
import AppActivityIndicator from "../../components/AppActivityIndicator"

export default function AnimalAdoptionList() {
  const [showFilters, setShowFilters] = useState(false)

  const [currentPositionAnimalsList, setCurrentPositionAnimalsList] =
    useState(0)

  const [firstLoadingAnimalsList, setFirstLoadingAnimalsList] = useState(false)

  const [loadingAnimalsList, setLoadingAnimalsList] = useState(false)

  const [animalsList, setAnimalsList] = useState([])

  const showList = !showFilters

  async function getAnimalsList(total = 15, isFirstLoading = false) {
    if (isFirstLoading) {
      setFirstLoadingAnimalsList(true)
    }

    setLoadingAnimalsList(true)

    try {
      const animals = await getAnimalsForAdoption(
        currentPositionAnimalsList,
        total
      )

      setAnimalsList([...animalsList, ...animals])
      setCurrentPositionAnimalsList(currentPositionAnimalsList + total)
    } catch {
      showErrorMessage(
        "Ocorreu um erro ao tentar obter lista de animais para adoção"
      )
    } finally {
      if (isFirstLoading) {
        setFirstLoadingAnimalsList(false)
      }

      setLoadingAnimalsList(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      await getAnimalsList(15, true)
    })()
  }, [])

  if (firstLoadingAnimalsList) {
    return (
      <AppSafeAreaView>
        <AppActivityIndicator size={"large"} />
      </AppSafeAreaView>
    )
  }

  return (
    <AppSafeAreaView>
      <AppScrollView>
        <AppHeaderDefault title={"Animais para Adoção"} />
        {showFilters && (
          <ViewMarginTop20>
            <FiltersAnimalAdoptionList onFilter={() => setShowFilters(false)} />
          </ViewMarginTop20>
        )}
        {showList && (
          <>
            <ViewMarginTop20>
              <AppButton
                Icon={MdiFilterSvg}
                text={"filtrar"}
                width={130}
                onPress={() => setShowFilters(true)}
              />
            </ViewMarginTop20>
            <ViewMarginTop20>
              {animalsList.map((animal, index) => (
                <ViewMarginTop10 key={index}>
                  <CardAnimalDetails
                    name={animal.name}
                    dateOfBirth={animal.dateOfBirth}
                    city={animal.city}
                    state={animal.state}
                    pictureUrl={animal.pictureUrl}
                  />
                </ViewMarginTop10>
              ))}
            </ViewMarginTop20>
            <ViewMarginY20>
              <AppButton
                styleVariant={"secondary"}
                Icon={MdiReloadSvg}
                text={"carregar mais"}
                disabled={loadingAnimalsList}
                loading={loadingAnimalsList}
                onPress={async () => await getAnimalsList(15)}
                testID={"AppButtonLoadMoreAnimals"}
              />
            </ViewMarginY20>
          </>
        )}
      </AppScrollView>
    </AppSafeAreaView>
  )
}
