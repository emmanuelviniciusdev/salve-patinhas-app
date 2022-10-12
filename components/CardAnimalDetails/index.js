import {
  ImageAnimalPicture,
  TextSubtitle,
  TextTitle,
  ViewCard,
  ViewWrapperInformation,
  ViewWrapperInformationAndAction,
} from "./styles"
import AppButton from "../AppButton"
import MdiHeartSvg from "../../assets/icons/mdi_heart.svg"
import MdiTrashCanSvg from "../../assets/icons/mdi_trash-can.svg"
import moment from "moment"
import { useNavigation } from "@react-navigation/native"
import routeNames from "../../routes/routeNames"

/**
 *
 * @param actionType {"openAnimalAdoptionDetails" | "deleteAnimal"}
 * @returns {JSX.Element}
 * @constructor
 */
export default function CardAnimalDetails({
  guidAnimal,
  name,
  dateOfBirth,
  city,
  state,
  pictureUrl,
  actionType = "openAnimalAdoptionDetails",
}) {
  const navigation = useNavigation()

  const buttonText =
    actionType === "openAnimalAdoptionDetails" ? "conhecer" : "remover"

  const buttonIcon =
    actionType === "openAnimalAdoptionDetails" ? MdiHeartSvg : MdiTrashCanSvg

  function getAnimalAge() {
    const differenceInYears = moment().diff(moment(dateOfBirth), "years")

    if (differenceInYears > 0) {
      return differenceInYears + (differenceInYears > 1 ? " anos" : " ano")
    }

    const differenceInMonths = moment().diff(moment(dateOfBirth), "months")

    return differenceInMonths + (differenceInMonths > 1 ? " meses" : " mês")
  }

  function openAnimalDetails() {
    navigation.navigate(routeNames.ANIMAL_ADOPTION_DETAILS)
  }

  function removeAnimal() {}

  function handleButtonAction() {
    if (actionType === "openAnimalAdoptionDetails") {
      openAnimalDetails()
      return
    }

    removeAnimal()
  }

  return (
    <ViewCard testID={"CardAnimalDetails"}>
      <ImageAnimalPicture source={{ uri: pictureUrl }} />
      <ViewWrapperInformationAndAction>
        <ViewWrapperInformation>
          <TextTitle>
            {name}, {getAnimalAge()}
          </TextTitle>
          <TextSubtitle>
            {city}, {state}
          </TextSubtitle>
        </ViewWrapperInformation>
        <AppButton
          Icon={buttonIcon}
          text={buttonText}
          width={150}
          onPress={handleButtonAction}
        />
      </ViewWrapperInformationAndAction>
    </ViewCard>
  )
}
