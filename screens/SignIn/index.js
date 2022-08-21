import {
  ContainerImageBackground,
  Container,
  Logo,
  Paragraph,
  Title,
  WrapperPresentation,
  WrapperAuthButtons,
} from "./styles"
import imgPartialLogo from "../../assets/images/partial-logo.png"
import humanHandsHoldingDogPawsPng from "../../assets/images/human-hands-holding-dog-paws.png"
import googleSvg from "../../assets/icons/google.svg"
import AppButton from "../../components/AppButton"

export default function SignIn() {
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
          <AppButton Icon={googleSvg} text={"entrar com google"} />
        </WrapperAuthButtons>
      </Container>
    </ContainerImageBackground>
  )
}
