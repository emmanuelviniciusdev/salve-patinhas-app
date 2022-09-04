import ReportedAnimalSignalMarker from "../ReportedAnimalSignalMarker"
import MapView from "react-native-maps"
import { Dimensions, useColorScheme } from "react-native"
import customMapStyles from "../../screens/AnimalLocation/customMapStyles"
import { useEffect, useState } from "react"
import * as Location from "expo-location"
import { useAnimalLocationContext } from "../../contexts/AnimalLocationContext"
import AppActivityIndicator from "../AppActivityIndicator"
import { showErrorMessage, showWarningMessage } from "../../utils"

const mapViewStyles = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
}

const LATITUDE_AND_LONGITUDE_DELTA = 0.015

export default function ReportedAnimalsMapView() {
  const systemColorScheme = useColorScheme()

  const customMapStyle = customMapStyles[systemColorScheme || "light"]

  const [coordsLocation, setCoordsLocation] = useState()

  const { unsetAnimalDetails } = useAnimalLocationContext()

  useEffect(() => {
    let currentCoordsLocation = {
      latitude: -18.8591751,
      longitude: -41.9536442,
    }

    ;(async () => {
      try {
        const { granted } = await Location.requestForegroundPermissionsAsync()

        if (!granted) {
          showWarningMessage(
            "Não foi possível obter sua localização atual",
            "Você precisa fornecer as permissões necessárias"
          )
          return
        }

        const currentPosition = await Location.getCurrentPositionAsync()

        currentCoordsLocation.latitude = currentPosition.coords.latitude
        currentCoordsLocation.longitude = currentPosition.coords.longitude
      } catch (e) {
        showErrorMessage("Erro ao tentar obter localização atual")
      } finally {
        setCoordsLocation(currentCoordsLocation)
      }
    })()
  }, [])

  if (!coordsLocation) {
    return <AppActivityIndicator size={"large"} />
  }

  return (
    <MapView
      style={mapViewStyles}
      customMapStyle={customMapStyle}
      initialRegion={{
        latitude: coordsLocation.latitude,
        longitude: coordsLocation.longitude,
        latitudeDelta: LATITUDE_AND_LONGITUDE_DELTA,
        longitudeDelta: LATITUDE_AND_LONGITUDE_DELTA,
      }}
      onPress={unsetAnimalDetails}
    >
      <ReportedAnimalSignalMarker
        coordinate={{ latitude: -23.5329, longitude: -46.6874 }}
      />
      <ReportedAnimalSignalMarker
        coordinate={{ latitude: -23.5229, longitude: -46.6774 }}
      />
    </MapView>
  )
}
