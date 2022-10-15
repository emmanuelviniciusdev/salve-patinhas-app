import AppSafeAreaView from "../../components/AppSafeAreaView"
import SlideAnimalAdoption from "../../components/SlideAnimalAdoption"
import AppHeaderDefault from "../../components/AppHeaderDefault"
import AppScrollView from "../../components/AppScrollView"
import {
  TextTitle,
  ViewWidth90Percent,
  ViewMarginY25,
  ViewMarginBottom20,
  ViewWrapperSlideAnimalAdoption,
} from "./styles"
import CardLabelAndText from "../../components/CardLabelAndText"
import MdiAccountBoxSvg from "../../assets/icons/mdi_account-box.svg"
import MdiPhoneSvg from "../../assets/icons/mdi_phone.svg"
import MdiEmailSvg from "../../assets/icons/mdi_email.svg"
import CardIconAndText from "../../components/CardIconAndText"
import { useEffect, useState } from "react"
import { getAnimalForAdoptionDetails } from "../../services/SalvePatinhas"
import { getAnimalAge, showErrorMessage } from "../../utils"
import AppActivityIndicator from "../../components/AppActivityIndicator"

export default function AnimalAdoptionDetails({ guidAnimal }) {
  const [animalDetails, setAnimalDetails] = useState()

  const [loadingAnimalDetails, setLoadingAnimalDetails] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await getAnimalForAdoptionDetails(guidAnimal)
        setAnimalDetails(response.data)
      } catch {
        showErrorMessage(
          "Ocorreu um erro ao tentar obter as informações do animal"
        )
      } finally {
        setLoadingAnimalDetails(false)
      }
    })()
  }, [])

  if (loadingAnimalDetails) {
    return (
      <AppSafeAreaView>
        <AppActivityIndicator size={"large"} />
      </AppSafeAreaView>
    )
  }

  return (
    <AppSafeAreaView>
      <AppScrollView widthInPercentage={100} centerContentVertically>
        <ViewWidth90Percent>
          <AppHeaderDefault title={`Sobre o ${animalDetails.species}`} />
        </ViewWidth90Percent>
        <ViewWrapperSlideAnimalAdoption>
          <SlideAnimalAdoption listPictureUrl={animalDetails.listPictureUrl} />
        </ViewWrapperSlideAnimalAdoption>
        <ViewWidth90Percent>
          <ViewMarginY25>
            <ViewMarginBottom20>
              <CardLabelAndText label={"Nome"} text={animalDetails.name} />
            </ViewMarginBottom20>
            <ViewMarginBottom20>
              <CardLabelAndText
                label={"Idade"}
                text={getAnimalAge(animalDetails.dateOfBirth)}
              />
            </ViewMarginBottom20>
            <CardLabelAndText
              label={"Descrição"}
              text={animalDetails.description}
              smallTextSize
            />
          </ViewMarginY25>
          <TextTitle>Contato</TextTitle>
          <ViewMarginY25>
            <ViewMarginBottom20>
              <CardIconAndText
                Icon={MdiAccountBoxSvg}
                text={animalDetails.contactInformation.name}
              />
            </ViewMarginBottom20>
            <ViewMarginBottom20>
              <CardIconAndText
                Icon={MdiPhoneSvg}
                text={animalDetails.contactInformation.phone}
              />
            </ViewMarginBottom20>
            <ViewMarginBottom20>
              <CardIconAndText
                Icon={MdiEmailSvg}
                text={animalDetails.contactInformation.email}
              />
            </ViewMarginBottom20>
          </ViewMarginY25>
        </ViewWidth90Percent>
      </AppScrollView>
    </AppSafeAreaView>
  )
}
