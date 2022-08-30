import { Marker } from "react-native-maps"
import ReportSignalLightSvg from "../../assets/icons/report-signal-light.svg"
import ReportSignalLightPressedSvg from "../../assets/icons/report-signal-light-pressed.svg"
import ReportSignalDarkSvg from "../../assets/icons/report-signal-dark.svg"
import ReportSignalDarkPressedSvg from "../../assets/icons/report-signal-dark-pressed.svg"
import { useColorScheme } from "react-native"
import { useAnimalLocationContext } from "../../contexts/AnimalLocationContext"
import { useEffect } from "react"

function getReportSignalIcon(colorScheme, isPressed) {
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

export default function ReportedAnimalSignalMarker({
  coordinate,
  onPress,
  isPressed = false,
}) {
  const { animalDetails, setAnimalDetails } = useAnimalLocationContext()
  console.log("animalDetails", animalDetails)

  useEffect(() => {
    setAnimalDetails().then()
  }, [])

  const systemColorScheme = useColorScheme()

  const ReportSignalIcon = getReportSignalIcon(systemColorScheme, isPressed)

  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <ReportSignalIcon />
    </Marker>
  )
}
