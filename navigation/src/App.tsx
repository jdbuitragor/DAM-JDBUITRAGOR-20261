import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "react-native-gesture-handler";
import { AuthStackParamList } from "./Routes";
import { LoginPage, RegisterPage } from "./screens";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "#fff",
            },
          }}
        >
          <Stack.Screen
            name="Login"
            component={LoginPage}
          />

          <Stack.Screen
            name="Register"
            component={RegisterPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;