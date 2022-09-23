import { ViewReportButton, ViewReportedAnimalPreDetails } from "./styles"
import ReportedAnimalPreDetails from "../../components/ReportedAnimalPreDetails"
import { AnimalLocationProvider } from "../../contexts/AnimalLocationContext"
import ReportedAnimalsMapView from "../../components/ReportedAnimalsMapView"
import AppSafeAreaView from "../../components/AppSafeAreaView"
import AppMenu from "../../components/AppMenu"
import routeNames from "../../routes/routeNames"
import ReportButton from "../../components/ReportButton"

export default function AnimalLocation() {
  return (
    <AnimalLocationProvider>
      <AppSafeAreaView>
        <ReportedAnimalsMapView />
        <ViewReportedAnimalPreDetails>
          <ReportedAnimalPreDetails />
        </ViewReportedAnimalPreDetails>
        <ViewReportButton>
          <ReportButton />
        </ViewReportButton>
        <AppMenu currentRouteName={routeNames.ANIMAL_LOCATION} />
      </AppSafeAreaView>
    </AnimalLocationProvider>
  )
}
