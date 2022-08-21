import { Content, Logo } from "./styles"
import partialLogo from "../../assets/partial-logo.png"
import { Paragraph, Title } from "../../styles/global"

export default function SignIn() {
  return (
    <Content>
      <Logo source={partialLogo} />
      <Title>Salve Patinhas</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        pretium, augue id fringilla tincidunt, risus nibh iaculis turpis, congue
        lobortis tortor mi sit amet diam.
      </Paragraph>
    </Content>
  )
}
