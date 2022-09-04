import { Text } from "react-native"
import { ViewMenu, ViewReportedAnimalPreDetails } from "./styles"
import ReportedAnimalPreDetails from "../../components/ReportedAnimalPreDetails"
import { AnimalLocationProvider } from "../../contexts/AnimalLocationContext"
import ReportedAnimalsMapView from "../../components/ReportedAnimalsMapView"
import AppSafeAreaView from "../../components/AppSafeAreaView"

export default function AnimalLocation() {
  return (
    <AnimalLocationProvider>
      <AppSafeAreaView>
        <ReportedAnimalsMapView />
        <ViewReportedAnimalPreDetails>
          <ReportedAnimalPreDetails />
        </ViewReportedAnimalPreDetails>
        <ViewMenu>
          <Text>Menu</Text>
        </ViewMenu>
      </AppSafeAreaView>
    </AnimalLocationProvider>
  )
}
