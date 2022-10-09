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
import moment from "moment"
import { useEffect } from "react"

/**
 *
 * @param actionType {"openAnimalAdoptionDetails" | "deleteAnimal"}
 * @returns {JSX.Element}
 * @constructor
 */
export default function CardAnimalDetails({
  name,
  dateOfBirth,
  city,
  state,
  pictureUrl,
  actionType = "openAnimalAdoptionDetails",
}) {
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

  useEffect(() => {
    getAnimalAge()
  })

  return (
    <ViewCard>
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
        <AppButton Icon={buttonIcon} text={buttonText} width={150} />
      </ViewWrapperInformationAndAction>
    </ViewCard>
  )
}
