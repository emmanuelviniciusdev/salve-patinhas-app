import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import AnimalLocation from "../screens/AnimalLocation"
import SignIn from "../screens/SignIn"
import routeNames from "./routeNames"
import ReportedAnimalDetails from "../screens/ReportedAnimalDetails"
import AnimalAdoption from "../screens/AnimalAdoption"
import UserAccount from "../screens/UserAccount"
import MenuMoreOptions from "../screens/MenuMoreOptions"
import ReportAnimal from "../screens/ReportAnimal"

const Stack = createNativeStackNavigator()

export default function Routes({ isSignedIn }) {
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
              name={routeNames.ANIMAL_ADOPTION}
              component={AnimalAdoption}
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
