import ReportedAnimalSignalMarker from "../ReportedAnimalSignalMarker"
import MapView from "react-native-maps"
import { Dimensions, useColorScheme } from "react-native"
import customMapStyles from "./customMapStyles"
import { useEffect, useState } from "react"
import * as Location from "expo-location"
import { useAnimalLocationContext } from "../../contexts/AnimalLocationContext"
import AppActivityIndicator from "../AppActivityIndicator"
import { showErrorMessage, showWarningMessage } from "../../utils"
import { getReportedAnimalsCoordsList } from "../../services/SalvePatinhas"

const mapViewStyles = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
}

const LATITUDE_AND_LONGITUDE_DELTA = 0.0012

export default function ReportedAnimalsMapView() {
  const systemColorScheme = useColorScheme()

  const customMapStyle = customMapStyles[systemColorScheme || "light"]

  const [coordsLocation, setCoordsLocation] = useState()

  const [reportedAnimalsCoords, setReportedAnimalCoords] = useState()

  const { unsetAnimalDetails } = useAnimalLocationContext()

  const loading = !coordsLocation || !reportedAnimalsCoords

  async function setCurrentLocation() {
    let currentCoordsLocation = {
      latitude: -18.8591751,
      longitude: -41.9536442,
    }

    /**
     * TODO: Refactor this flow to use "useCurrentLocation" hook.
     */
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync()

      if (!granted) {
        showWarningMessage(
          "Não foi possível obter sua localização atual",
          "Você precisa fornecer as permissões necessárias"
        )
        return
      }

      await Location.getForegroundPermissionsAsync()

      const currentPosition = await Location.getCurrentPositionAsync()

      /**
       * TODO: Remote this mock.
       *
       * Mocks coordinates to facilitate tests with users.
       */
      currentPosition.coords.latitude = -22.8615
      currentPosition.coords.longitude = -47.1051

      currentCoordsLocation.latitude = currentPosition.coords.latitude
      currentCoordsLocation.longitude = currentPosition.coords.longitude
    } catch (e) {
      showErrorMessage("Erro ao tentar obter localização atual")
    } finally {
      setCoordsLocation(currentCoordsLocation)
    }
  }

  async function getReportedAnimalCoords() {
    try {
      const response = await getReportedAnimalsCoordsList()
      setReportedAnimalCoords(response.data)
    } catch {
      showErrorMessage("Erro ao tentar obter animais reportados")
    }
  }

  useEffect(() => {
    ;(async () => {
      await setCurrentLocation()
      await getReportedAnimalCoords()
    })()
  }, [])

  if (loading) {
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
      testID={"MapView"}
    >
      {reportedAnimalsCoords &&
        reportedAnimalsCoords.map(({ guid, latitude, longitude }, index) => (
          <ReportedAnimalSignalMarker
            key={index}
            coordinate={{ guid, latitude, longitude }}
          />
        ))}
    </MapView>
  )
}
