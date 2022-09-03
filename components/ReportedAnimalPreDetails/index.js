import { AppContainer } from "../AppContainer"
import {
  IconExpand,
  ImageAnimalPicture,
  TextAddress,
  TextPreDescription,
  ViewContent,
  ViewDetails,
  WrapperActivityIndicator,
} from "./styles"
import { useAnimalLocationContext } from "../../contexts/AnimalLocationContext"
import { limitTextSize } from "../../utils"
import { AppActivityIndicator } from "../AppActivityIndicator"

function Loading() {
  return (
    <AppContainer>
      <WrapperActivityIndicator>
        <AppActivityIndicator size={"large"} />
      </WrapperActivityIndicator>
    </AppContainer>
  )
}

export function ReportedAnimalPreDetails() {
  const { animalDetails } = useAnimalLocationContext()

  const noData =
    !animalDetails || (!animalDetails.data && !animalDetails.loading)

  const isLoading = animalDetails.loading

  if (noData) {
    return <></>
  }

  if (isLoading) {
    return <Loading />
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
