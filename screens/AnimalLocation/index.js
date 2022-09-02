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
import * as Location from "expo-location"
import { useEffect, useState } from "react"

const LATITUDE_AND_LONGITUDE_DELTA = 0.015

export default function AnimalLocation() {
  const systemColorScheme = useColorScheme()

  const customMapStyle = customMapStyles[systemColorScheme || "light"]

  const [coordsLocation, setCoordsLocation] = useState()

  useEffect(() => {
    ;(async () => {
      try {
        await Location.getForegroundPermissionsAsync()
        const currentPositionLocation = await Location.getCurrentPositionAsync()
        setCoordsLocation({
          latitude: currentPositionLocation.coords.latitude,
          longitude: currentPositionLocation.coords.longitude,
        })
      } catch (e) {
        // TODO: Handle error
        console.error(e)
      }
    })()
  }, [])

  // TODO: Implement loading animation
  if (!coordsLocation) {
    return <></>
  }

  return (
    <AnimalLocationProvider>
      <SafeAreaViewContent>
        <MapView
          style={mapViewStyles}
          customMapStyle={customMapStyle}
          region={{
            latitude: coordsLocation.latitude,
            longitude: coordsLocation.longitude,
            latitudeDelta: LATITUDE_AND_LONGITUDE_DELTA,
            longitudeDelta: LATITUDE_AND_LONGITUDE_DELTA,
          }}
        >
          <ReportedAnimalSignalMarker
            coordinate={{ latitude: -23.5329, longitude: -46.6874 }}
          />
          <ReportedAnimalSignalMarker
            coordinate={{ latitude: -23.5229, longitude: -46.6774 }}
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
