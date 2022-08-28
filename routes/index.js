import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import AnimalLocation from "../screens/AnimalLocation"
import SignIn from "../screens/SignIn"

export const routeNames = {
  SIGN_IN: "SIGN_IN",
  ANIMAL_LOCATION: "ANIMAL_LOCATION",
}

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
          </>
        ) : (
          <Stack.Screen name={routeNames.SIGN_IN} component={SignIn} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
