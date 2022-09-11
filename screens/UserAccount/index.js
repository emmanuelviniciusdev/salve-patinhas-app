import AppSafeAreaView from "../../components/AppSafeAreaView"
import { Text } from "react-native"
import routeNames from "../../routes/routeNames"
import AppMenu from "../../components/AppMenu"

export default function UserAccount() {
  return (
    <AppSafeAreaView>
      <Text>UserAccount</Text>
      <AppMenu currentRouteName={routeNames.USER_ACCOUNT} />
    </AppSafeAreaView>
  )
}
