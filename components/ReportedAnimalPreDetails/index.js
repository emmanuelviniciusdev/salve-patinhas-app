import AppContainer from "../AppContainer"
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
import AppActivityIndicator from "../AppActivityIndicator"
import { Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import routeNames from "../../routes/routeNames"

function Loading() {
  return (
    <AppContainer>
      <WrapperActivityIndicator>
        <AppActivityIndicator size={"large"} />
      </WrapperActivityIndicator>
    </AppContainer>
  )
}

export default function ReportedAnimalPreDetails() {
  const { animalDetails, lastPressedCoordinate } = useAnimalLocationContext()

  const navigation = useNavigation()

  const noData =
    !animalDetails || (!animalDetails.data && !animalDetails.loading)

  const isLoading = animalDetails.loading

  if (noData) {
    return <></>
  }

  if (isLoading) {
    return <Loading />
  }

  function openFullDetailsScreen() {
    navigation.navigate(routeNames.REPORTED_ANIMAL_DETAILS, {
      coordinate: lastPressedCoordinate,
    })
  }

  return (
    <AppContainer>
      <Pressable onPress={openFullDetailsScreen}>
        <ViewContent testID={"ViewContentReportedAnimalPreDetails"}>
          <ImageAnimalPicture
            source={{ uri: animalDetails.data.pictureUrl }}
            testID={"ImageAnimalPicture"}
          />
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
      </Pressable>
    </AppContainer>
  )
}
