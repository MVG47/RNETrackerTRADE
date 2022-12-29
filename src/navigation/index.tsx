import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import * as React from "react";

// importing components
import MainHeader from "../components/MainHeader";
// import screens
import Counter from "../screens/Counter";
import Home from "../screens/Home";
// importing services
import { CombinedDarkTheme } from "../services/themes";
import TrackerScreen from "./pages/TrackerScreen";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer theme={CombinedDarkTheme}>
      <Stack.Navigator
        screenOptions={{
          header: MainHeader,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
          },
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={TrackerScreen}
        />
        <Stack.Screen name="Counter" component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
