import {
  ImageAnimalPicture,
  TextSubtitle,
  TextTitle,
  ViewCard,
  ViewWrapperInformation,
  ViewWrapperInformationAndAction,
} from "./styles"
import AppButton from "../AppButton"
import collie1Jpg from "../../assets/images/collie-1.jpg"
import MdiHeartSvg from "../../assets/icons/mdi_heart.svg"
import MdiTrashCanSvg from "../../assets/icons/mdi_trash-can.svg"

/**
 *
 * @param actionType {"openAnimalAdoptionDetails" | "deleteAnimal"}
 * @returns {JSX.Element}
 * @constructor
 */
export default function CardAnimalDetails({
  actionType = "openAnimalAdoptionDetails",
}) {
  const buttonText =
    actionType === "openAnimalAdoptionDetails" ? "conhecer" : "remover"

  const buttonIcon =
    actionType === "openAnimalAdoptionDetails" ? MdiHeartSvg : MdiTrashCanSvg

  return (
    <ViewCard>
      <ImageAnimalPicture source={collie1Jpg} />
      <ViewWrapperInformationAndAction>
        <ViewWrapperInformation>
          <TextTitle>Tobias, 3 anos</TextTitle>
          <TextSubtitle>São Paulo, SP</TextSubtitle>
        </ViewWrapperInformation>
        <AppButton Icon={buttonIcon} text={buttonText} width={150} />
      </ViewWrapperInformationAndAction>
    </ViewCard>
  )
}
