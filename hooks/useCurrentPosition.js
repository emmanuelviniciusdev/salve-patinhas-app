import { useEffect, useState } from "react"
import * as Location from "expo-location"
import { showErrorMessage, showWarningMessage } from "../utils"

export default function useCurrentPosition(showUIMessages = false) {
  const [locationPermissionsGranted, setLocationPermissionsGranted] =
    useState(false)

  const [currentPosition, setCurrentPosition] = useState(null)

  async function requestLocation() {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync()

      setLocationPermissionsGranted(granted)

      if (showUIMessages && !granted) {
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

      setCurrentPosition(currentPosition)
    } catch (e) {
      console.error(e)
      if (showUIMessages) {
        showErrorMessage("Erro ao tentar obter localização atual")
      }
    }
  }

  useEffect(() => {
    ;(async () => {
      await requestLocation()
    })()
  }, [])

  return [locationPermissionsGranted, currentPosition]
}
