import AppSafeAreaView from "../../components/AppSafeAreaView"
import AppTextInput from "../../components/AppTextInput"

export default function ReportAnimal() {
  return (
    <AppSafeAreaView>
      <AppTextInput label={"Name"} placeholder={"Type your name"} />
    </AppSafeAreaView>
  )
}
