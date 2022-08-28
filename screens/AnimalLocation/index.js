import { Dimensions, Text, View } from "react-native"
import {
  Container,
  WrapperMenu,
  WrapperReportedAnimalPreDetails,
} from "./styles"
import MapView from "react-native-maps"
import ReportedAnimalSignalMarker from "../../components/ReportedAnimalSignalMarker"
import { ReportedAnimalPreDetails } from "../../components/ReportedAnimalPreDetails"

export default function AnimalLocation() {
  return (
    <Container>
      <MapView
        style={mapViewStyles}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <ReportedAnimalSignalMarker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
        />
      </MapView>
      <WrapperReportedAnimalPreDetails>
        <ReportedAnimalPreDetails />
      </WrapperReportedAnimalPreDetails>
      <WrapperMenu>
        <Text>Menu</Text>
      </WrapperMenu>
    </Container>
  )
}

const mapViewStyles = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
}
