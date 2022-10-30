import {
  Container,
  Paragraph,
  Title,
  WrapperPresentation,
  WrapperAuthButtons,
  ViewMarginTop5,
  ImageAbsoluteDalmatian,
} from "./styles"
import DalmarianTransparentPng from "../../assets/images/dalmatian-transparent.png"
import GoogleSvg from "../../assets/icons/google.svg"
import MdiAppleSvg from "../../assets/icons/mdi_apple.svg"
import FoundationPawWhiteSvg from "../../assets/icons/foundation_paw_white.svg"
import FoundationPawBlackSvg from "../../assets/icons/foundation_paw_black.svg"
import AppButton from "../../components/AppButton"
import { useAuthenticationContext } from "../../contexts/AuthenticationContext"
import AppSafeAreaView from "../../components/AppSafeAreaView"
import { useColorScheme } from "react-native"

export default function SignIn() {
  const { login } = useAuthenticationContext()

  const systemColorScheme = useColorScheme()

  const IconPawSvg =
    systemColorScheme === "dark" ? FoundationPawWhiteSvg : FoundationPawBlackSvg

  return (
    <AppSafeAreaView>
      <ImageAbsoluteDalmatian source={DalmarianTransparentPng} />
      <Container>
        <WrapperPresentation>
          <IconPawSvg />
          <Title>Salve Patinhas</Title>
          <Paragraph>
            Ajude na localização de animais perdidos ou abandonados. Adote ou dê
            para adoção. Seja solidário e salve patinhas!
          </Paragraph>
        </WrapperPresentation>
        <WrapperAuthButtons>
          <AppButton
            Icon={GoogleSvg}
            text={"entrar com google"}
            onPress={login}
          />
          <ViewMarginTop5>
            <AppButton
              Icon={MdiAppleSvg}
              text={"entrar com apple"}
              onPress={login}
            />
          </ViewMarginTop5>
        </WrapperAuthButtons>
      </Container>
    </AppSafeAreaView>
  )
}
