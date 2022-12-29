import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
          "Manrope-Bold": require("../assets/fonts/Manrope/static/Manrope-Bold.ttf"),
          "Manrope-Regular": require("../assets/fonts/Manrope/static/Manrope-Regular.ttf"),
          "Manrope-Light": require("../assets/fonts/Manrope/static/Manrope-Light.ttf"),
          "Manrope-ExtraBold": require("../assets/fonts/Manrope/static/Manrope-ExtraBold.ttf"),
          "Manrope-ExtraLight": require("../assets/fonts/Manrope/static/Manrope-ExtraLight.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setTimeout(function () {
          //do what you need here
          setLoadingComplete(true);
          SplashScreen.hideAsync();
        }, 2000);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
