import AppSafeAreaView from "../../components/AppSafeAreaView"
import { Text } from "react-native"
import routeNames from "../../routes/routeNames"
import AppMenu from "../../components/AppMenu"

export default function MenuMoreOptions() {
  return (
    <AppSafeAreaView>
      <Text>MenuMoreOptions</Text>
      <AppMenu currentRouteName={routeNames.MENU_MORE_OPTIONS} />
    </AppSafeAreaView>
  )
}
