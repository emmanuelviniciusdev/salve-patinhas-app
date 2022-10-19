import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import AnimalLocation from "../screens/AnimalLocation"
import SignIn from "../screens/SignIn"
import routeNames from "./routeNames"
import ReportedAnimalDetails from "../screens/ReportedAnimalDetails"
import UserAccount from "../screens/UserAccount"
import MenuMoreOptions from "../screens/MenuMoreOptions"
import ReportAnimal from "../screens/ReportAnimal"
import AnimalAdoptionList from "../screens/AnimalAdoptionList"
import AnimalAdoptionDetails from "../screens/AnimalAdoptionDetails"
import AnimalAdoptionRegistration from "../screens/AnimalAdoptionRegistration"
import AnimalAdoptionRegistrationForm from "../screens/AnimalAdoptionRegistrationForm"
import { useAuthenticationContext } from "../contexts/AuthenticationContext"

const Stack = createNativeStackNavigator()

export default function Routes() {
  const { isSignedIn } = useAuthenticationContext()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isSignedIn ? (
          <>
            <Stack.Screen
              name={routeNames.ANIMAL_LOCATION}
              component={AnimalLocation}
            />
            <Stack.Screen
              name={routeNames.REPORT_ANIMAL}
              component={ReportAnimal}
            />
            <Stack.Screen
              name={routeNames.REPORTED_ANIMAL_DETAILS}
              component={ReportedAnimalDetails}
            />
            <Stack.Screen
              name={routeNames.ANIMAL_ADOPTION_LIST}
              component={AnimalAdoptionList}
            />
            <Stack.Screen
              name={routeNames.ANIMAL_ADOPTION_DETAILS}
              component={AnimalAdoptionDetails}
            />
            <Stack.Screen
              name={routeNames.ANIMAL_ADOPTION_REGISTRATION}
              component={AnimalAdoptionRegistration}
            />
            <Stack.Screen
              name={routeNames.ANIMAL_ADOPTION_REGISTRATION_FORM}
              component={AnimalAdoptionRegistrationForm}
            />
            <Stack.Screen
              name={routeNames.USER_ACCOUNT}
              component={UserAccount}
            />
            <Stack.Screen
              name={routeNames.MENU_MORE_OPTIONS}
              component={MenuMoreOptions}
            />
          </>
        ) : (
          <Stack.Screen name={routeNames.SIGN_IN} component={SignIn} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
