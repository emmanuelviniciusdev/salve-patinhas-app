import AppSafeAreaView from "../../components/AppSafeAreaView"
import SlideAnimalAdoption from "../../components/SlideAnimalAdoption"
import AppHeaderDefault from "../../components/AppHeaderDefault"
import AppScrollView from "../../components/AppScrollView"
import { ViewWidth90Percent, ViewWrapperSlideAnimalAdoption } from "./styles"

export default function AnimalAdoptionDetails() {
  return (
    <AppSafeAreaView>
      <AppScrollView widthInPercentage={100} centerContentVertically>
        <ViewWidth90Percent>
          <AppHeaderDefault title={"Sobre o cão"} />
        </ViewWidth90Percent>
        <ViewWrapperSlideAnimalAdoption>
          <SlideAnimalAdoption />
        </ViewWrapperSlideAnimalAdoption>
      </AppScrollView>
    </AppSafeAreaView>
  )
}
