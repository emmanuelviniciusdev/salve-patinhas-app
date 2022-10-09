import AppTextInput from "../AppTextInput"
import AppButton from "../AppButton"
import MdiFilterCheckSvg from "../../assets/icons/mdi_filter-check.svg"
import { ViewMarginTop20 } from "./styles"

export default function FiltersAnimalAdoptionList({ onFilter }) {
  return (
    <>
      <ViewMarginTop20>
        <AppTextInput label={"Cidade"} placeholder={"Cidade"} />
      </ViewMarginTop20>
      <ViewMarginTop20>
        <AppTextInput label={"Estado"} placeholder={"Estado"} />
      </ViewMarginTop20>
      <ViewMarginTop20>
        <AppTextInput label={"Espécie"} placeholder={"Espécie"} />
      </ViewMarginTop20>
      <ViewMarginTop20>
        <AppButton
          styleVariant={"primary"}
          Icon={MdiFilterCheckSvg}
          text={"aplicar filtros"}
          onPress={onFilter}
        />
      </ViewMarginTop20>
    </>
  )
}
