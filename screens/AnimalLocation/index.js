import { Text } from "react-native"
import {
  SafeAreaViewContent,
  ViewMenu,
  ViewReportedAnimalPreDetails,
} from "./styles"
import ReportedAnimalPreDetails from "../../components/ReportedAnimalPreDetails"
import { AnimalLocationProvider } from "../../contexts/AnimalLocationContext"
import ReportedAnimalsMapView from "../../components/ReportedAnimalsMapView"

export default function AnimalLocation() {
  return (
    <AnimalLocationProvider>
      <SafeAreaViewContent>
        <ReportedAnimalsMapView />
        <ViewReportedAnimalPreDetails>
          <ReportedAnimalPreDetails />
        </ViewReportedAnimalPreDetails>
        <ViewMenu>
          <Text>Menu</Text>
        </ViewMenu>
      </SafeAreaViewContent>
    </AnimalLocationProvider>
  )
}
