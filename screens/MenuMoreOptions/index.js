import AppSafeAreaView from "../../components/AppSafeAreaView"
import { Pressable, Text } from "react-native"
import {
  ViewContent,
  getStyledIcon,
  ViewWrapperPressableCloseIcon,
  ViewPressableMenuOptionContent,
  TextPressableMenuOption,
} from "./styles"
import MdiLogout from "../../assets/icons/mdi_logout.svg"
import MdiWindowClose from "../../assets/icons/mdi_window-close.svg"
import { useNavigation } from "@react-navigation/native"
import { useAuthenticationContext } from "../../contexts/AuthenticationContext"

export default function MenuMoreOptions() {
  const { logout } = useAuthenticationContext()

  const navigation = useNavigation()

  const StyledMdiLogout = getStyledIcon(MdiLogout)

  const StyledMdiWindowClose = getStyledIcon(MdiWindowClose)

  return (
    <AppSafeAreaView>
      <ViewWrapperPressableCloseIcon>
        <Pressable onPress={() => navigation.goBack()}>
          <StyledMdiWindowClose />
        </Pressable>
      </ViewWrapperPressableCloseIcon>
      <ViewContent>
        <Pressable onPress={logout}>
          <ViewPressableMenuOptionContent>
            <StyledMdiLogout />
            <TextPressableMenuOption>encerrar sessão</TextPressableMenuOption>
          </ViewPressableMenuOptionContent>
        </Pressable>
      </ViewContent>
    </AppSafeAreaView>
  )
}
