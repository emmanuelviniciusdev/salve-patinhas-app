import AppSafeAreaView from "../../components/AppSafeAreaView"
import { Text } from "react-native"
import routeNames from "../../routes/routeNames"
import AppMenu from "../../components/AppMenu"

export default function AnimalAdoption() {
  return (
    <AppSafeAreaView>
      <Text>AnimalAdoption</Text>
      <AppMenu currentRouteName={routeNames.ANIMAL_ADOPTION} />
    </AppSafeAreaView>
  )
}
