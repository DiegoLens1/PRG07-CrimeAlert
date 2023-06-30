import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useState, useEffect } from "react";
import Map from "./components/map";
import CrimeList from "./components/crimeList";
import CrimeDataContext from "./context/crimeDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Settings from "./components/settings";
import ThemeContext from "./context/themeContext";
import { useColorScheme, StyleSheet } from "react-native";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  //haal context op en zet de state
  const [crimeData, setCrimeData] = useState([]);
  const crimeDataState = { crimeData, setCrimeData };
  const [theme, setTheme] = useState(useColorScheme());
  const themeState = { theme, setTheme };

  useEffect(() => {
    fetchData();
  }, []);

  //Fetch json data van de webservice
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://stud.hosted.hr.nl/1000200/crimeWebservice/"
      );
      const jsonData = await response.json();
      setCrimeData(jsonData);
      const jsonValue = JSON.stringify(jsonData);
      await AsyncStorage.setItem("crimeData", jsonValue);
    } catch (error) {
      console.error(error);
      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem("crimeData");
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
          // error reading value
        }
      };
      setCrimeData(await getData());
    }
  };

  return (
    //Providers zodat je crimeData en theme state in alle child components kan gebruiken
    <ThemeContext.Provider value={themeState}>
      <CrimeDataContext.Provider value={crimeDataState}>
        <NavigationContainer>
          <Tab.Navigator
            activeColor={
              theme === "light" ? "rgb(28, 28, 30)" : "rgb(229, 229, 231)"
            }
            inactiveColor={
              theme === "light" ? "rgb(28, 28, 30)" : "rgb(229, 229, 231)"
            }
            barStyle={
              theme === "light"
                ? styles.lightTabBackground
                : styles.darkTabBackground
            }
          >
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Crime Areas" component={CrimeList} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </CrimeDataContext.Provider>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  lightTabBackground: {
    backgroundColor: "#eee",
  },
  darkTabBackground: {
    backgroundColor: "#394153",
  },
  lightText: {
    color: "rgb(28, 28, 30)",
  },
  darkText: {
    color: "rgb(229, 229, 231)",
  },
});
