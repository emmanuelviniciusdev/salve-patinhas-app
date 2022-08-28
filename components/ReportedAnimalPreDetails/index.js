import { AppContainer } from "../AppContainer"
import {
  IconExpand,
  ImageAnimalPicture,
  TextAddress,
  TextPreDescription,
  ViewContent,
  ViewDetails,
} from "./styles"

export function ReportedAnimalPreDetails() {
  return (
    <AppContainer>
      <ViewContent>
        <ImageAnimalPicture
          source={require("../../assets/images/cachorro-deitado-calcada.jpg")}
        />
        <ViewDetails>
          <TextPreDescription>
            Cão branco, porte médio, parece ter dono, visto em frente ao
            supermerc...
          </TextPreDescription>
          <TextAddress>Rua Clodovaldo, Jd. Paraíso, Campinas, SP</TextAddress>
        </ViewDetails>
        <IconExpand />
      </ViewContent>
    </AppContainer>
  )
}
