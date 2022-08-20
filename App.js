import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useState } from "react"
import SignIn from "./screens/SignIn"
import AnimalLocation from "./screens/AnimalLocation"

const Stack = createNativeStackNavigator()

export default function App() {
  //  TODO: Implement auth flow
  const [isSignedIn] = useState(false)

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isSignedIn ? (
            <>
              <Stack.Screen
                name={"AnimalLocation"}
                component={AnimalLocation}
              />
            </>
          ) : (
            <Stack.Screen name={"SignIn"} component={SignIn} />
          )}
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  )
}
