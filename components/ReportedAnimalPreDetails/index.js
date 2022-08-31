import { AppContainer } from "../AppContainer"
import {
  IconExpand,
  ImageAnimalPicture,
  TextAddress,
  TextPreDescription,
  ViewContent,
  ViewDetails,
} from "./styles"
import { useAnimalLocationContext } from "../../contexts/AnimalLocationContext"
import { limitTextSize } from "../../utils"

export function ReportedAnimalPreDetails() {
  const { animalDetails } = useAnimalLocationContext()

  if (!animalDetails.data) {
    return <></>
  }

  return (
    <AppContainer>
      <ViewContent>
        <ImageAnimalPicture source={{ uri: animalDetails.data.pictureUrl }} />
        <ViewDetails>
          <TextPreDescription>
            {limitTextSize(animalDetails.data.description, 55)}
          </TextPreDescription>
          <TextAddress>
            {limitTextSize(animalDetails.data.address, 40)}
          </TextAddress>
        </ViewDetails>
        <IconExpand />
      </ViewContent>
    </AppContainer>
  )
}
