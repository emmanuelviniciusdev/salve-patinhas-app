import AppSafeAreaView from "../../components/AppSafeAreaView"
import AppHeaderDefault from "../../components/AppHeaderDefault"
import AppScrollView from "../../components/AppScrollView"
import AppButton from "../../components/AppButton"
import MdiFilterSvg from "../../assets/icons/mdi_filter.svg"
import MdiReloadSvg from "../../assets/icons/mdi_reload.svg"
import { ViewMarginTop10, ViewMarginTop20, ViewMarginY20 } from "./styles"
import CardAnimalDetails from "../../components/CardAnimalDetails"
import { useState } from "react"
import FiltersAnimalAdoptionList from "../../components/FiltersAnimalAdoptionList"

export default function AnimalAdoptionList() {
  const [showFilters, setShowFilters] = useState(false)

  const showList = !showFilters

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
              <ViewMarginTop10>
                <CardAnimalDetails />
              </ViewMarginTop10>
            </ViewMarginTop20>
            <ViewMarginY20>
              <AppButton
                styleVariant={"secondary"}
                Icon={MdiReloadSvg}
                text={"carregar mais"}
              />
            </ViewMarginY20>
          </>
        )}
      </AppScrollView>
    </AppSafeAreaView>
  )
}
