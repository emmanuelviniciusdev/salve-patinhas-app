import { Marker } from "react-native-maps"
import ReportSignalLightSvg from "../../assets/icons/report-signal-light.svg"
import ReportSignalLightPressedSvg from "../../assets/icons/report-signal-light-pressed.svg"
import ReportSignalDarkSvg from "../../assets/icons/report-signal-dark.svg"
import ReportSignalDarkPressedSvg from "../../assets/icons/report-signal-dark-pressed.svg"
import { useColorScheme } from "react-native"
import { useAnimalLocationContext } from "../../contexts/AnimalLocationContext"

function getReportSignaMarkerlIcon(colorScheme, isPressed) {
  const mapIconStates = {
    light: ReportSignalLightSvg,
    "light-pressed": ReportSignalLightPressedSvg,
    dark: ReportSignalDarkSvg,
    "dark-pressed": ReportSignalDarkPressedSvg,
  }

  if (!colorScheme) {
    colorScheme = "light"
  }

  const state = isPressed ? `${colorScheme}-pressed` : colorScheme

  return mapIconStates[state]
}

export default function ReportedAnimalSignalMarker({ coordinate }) {
  const { setAnimalDetails, lastPressedCoordinate } = useAnimalLocationContext()

  const isPressed =
    lastPressedCoordinate &&
    lastPressedCoordinate.latitude === coordinate.latitude &&
    lastPressedCoordinate.longitude === coordinate.longitude

  const systemColorScheme = useColorScheme()

  const ReportSignalMarkerIcon = getReportSignaMarkerlIcon(
    systemColorScheme,
    isPressed
  )

  return (
    <Marker
      coordinate={coordinate}
      onPress={() => setAnimalDetails(coordinate)}
      style={{ width: 50, height: 50 }}
    >
      <ReportSignalMarkerIcon testID={"ReportSignalMarkerIcon"} />
    </Marker>
  )
}
