import AppContainer from "../AppContainer"
import {
  getStyledIcon,
  PressableIcon,
  TextPressableIcon,
  ViewContent,
  ViewContentPressableIcon,
} from "./styles"
import MdiPawSvg from "../../assets/icons/mdi_paw.svg"
import routeNames from "../../routes/routeNames"
import { useColorScheme } from "react-native"

function PressableMenu({ Icon, textIcon, routeName, currentRouteName }) {
  const systemColorScheme = useColorScheme()

  const isCurrentRoute = routeName === currentRouteName

  const StyledIcon = getStyledIcon(Icon, systemColorScheme, isCurrentRoute)

  return (
    <PressableIcon>
      <ViewContentPressableIcon>
        <StyledIcon />
        {isCurrentRoute && (
          <TextPressableIcon
            colorScheme={systemColorScheme}
            isCurrentRoute={isCurrentRoute}
          >
            {textIcon}
          </TextPressableIcon>
        )}
      </ViewContentPressableIcon>
    </PressableIcon>
  )
}

export default function AppMenu({ currentRouteName }) {
  return (
    <AppContainer>
      <ViewContent>
        <PressableMenu
          Icon={MdiPawSvg}
          textIcon={"encontrar"}
          routeName={routeNames.ANIMAL_LOCATION}
          currentRouteName={currentRouteName}
        />
        <PressableMenu
          Icon={MdiPawSvg}
          textIcon={"encontrar"}
          routeName={""}
          currentRouteName={currentRouteName}
        />
        <PressableMenu
          Icon={MdiPawSvg}
          textIcon={"encontrar"}
          routeName={""}
          currentRouteName={currentRouteName}
        />
        <PressableMenu
          Icon={MdiPawSvg}
          textIcon={"encontrar"}
          routeName={""}
          currentRouteName={currentRouteName}
        />
      </ViewContent>
    </AppContainer>
  )
}
