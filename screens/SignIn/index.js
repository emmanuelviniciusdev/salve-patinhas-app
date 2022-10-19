import {
  ContainerImageBackground,
  Container,
  Logo,
  Paragraph,
  Title,
  WrapperPresentation,
  WrapperAuthButtons,
  ViewMarginTop5,
} from "./styles"
import imgPartialLogo from "../../assets/images/partial-logo.png"
import humanHandsHoldingDogPawsPng from "../../assets/images/human-hands-holding-dog-paws.png"
import GoogleSvg from "../../assets/icons/google.svg"
import MdiAppleSvg from "../../assets/icons/mdi_apple.svg"
import AppButton from "../../components/AppButton"
import { useAuthenticationContext } from "../../contexts/AuthenticationContext"

export default function SignIn() {
  const { login } = useAuthenticationContext()

  return (
    <ContainerImageBackground source={humanHandsHoldingDogPawsPng}>
      <Container>
        <WrapperPresentation>
          <Logo source={imgPartialLogo} />
          <Title>Salve Patinhas</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            pretium, augue id fringilla tincidunt, risus nibh iaculis turpis,
            congue lobortis tortor mi sit amet diam.
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
    </ContainerImageBackground>
  )
}
