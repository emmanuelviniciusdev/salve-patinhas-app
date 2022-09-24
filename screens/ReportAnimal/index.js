import AppSafeAreaView from "../../components/AppSafeAreaView"
import { ViewContent } from "./styles"
import ReportedAnimalPicture from "../../components/ReportedAnimalPicture"

export default function ReportAnimal() {
  return (
    <AppSafeAreaView>
      <ViewContent>
        <ReportedAnimalPicture />
      </ViewContent>
    </AppSafeAreaView>
  )
}
