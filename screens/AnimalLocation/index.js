import { ViewMenu, ViewReportedAnimalPreDetails } from "./styles"
import ReportedAnimalPreDetails from "../../components/ReportedAnimalPreDetails"
import { AnimalLocationProvider } from "../../contexts/AnimalLocationContext"
import ReportedAnimalsMapView from "../../components/ReportedAnimalsMapView"
import AppSafeAreaView from "../../components/AppSafeAreaView"
import AppMenu from "../../components/AppMenu"
import routeNames from "../../routes/routeNames"

export default function AnimalLocation() {
  return (
    <AnimalLocationProvider>
      <AppSafeAreaView>
        <ReportedAnimalsMapView />
        <ViewReportedAnimalPreDetails>
          <ReportedAnimalPreDetails />
        </ViewReportedAnimalPreDetails>
        <ViewMenu>
          <AppMenu currentRouteName={routeNames.ANIMAL_LOCATION} />
        </ViewMenu>
      </AppSafeAreaView>
    </AnimalLocationProvider>
  )
}
