import { Marker } from "react-native-maps"

export default function ReportedAnimalSignalMarker({ coordinate }) {
  return <Marker coordinate={coordinate}></Marker>
}
