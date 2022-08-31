import { Dimensions, Text, useColorScheme } from "react-native"
import {
  SafeAreaViewContent,
  ViewMenu,
  ViewReportedAnimalPreDetails,
} from "./styles"
import MapView from "react-native-maps"
import ReportedAnimalSignalMarker from "../../components/ReportedAnimalSignalMarker"
import { ReportedAnimalPreDetails } from "../../components/ReportedAnimalPreDetails"
import { AnimalLocationProvider } from "../../contexts/AnimalLocationContext"
import customMapStyles from "./customMapStyles"

const LATITUDE_AND_LONGITUDE_DELTA = 0.015

export default function AnimalLocation() {
  const systemColorScheme = useColorScheme()

  const customMapStyle = customMapStyles[systemColorScheme || "light"]

  return (
    <AnimalLocationProvider>
      <SafeAreaViewContent>
        <MapView
          style={mapViewStyles}
          customMapStyle={customMapStyle}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: LATITUDE_AND_LONGITUDE_DELTA,
            longitudeDelta: LATITUDE_AND_LONGITUDE_DELTA,
          }}
        >
          <ReportedAnimalSignalMarker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          />
          <ReportedAnimalSignalMarker
            coordinate={{ latitude: 37.77725, longitude: -122.4334 }}
          />
        </MapView>
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

const mapViewStyles = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
}
