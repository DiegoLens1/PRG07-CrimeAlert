import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useState, useEffect } from "react";
import Map from "./components/map";
import CrimeList from "./components/crimeList";
import CrimeDataContext from "./context/crimeDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [crimeData, setCrimeData] = useState([]);
  const crimeDataState = { crimeData, setCrimeData };

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
          const jsonValue = await AsyncStorage.getItem('crimeData');
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
          // error reading value
        }
      };
      setCrimeData(await getData())
    }
  };

  return (
    //Provider zodat je crimeData state in alle child components kan gebruiken
    <CrimeDataContext.Provider value={crimeDataState}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Crime Areas" component={CrimeList} />
        </Tab.Navigator>
      </NavigationContainer>
    </CrimeDataContext.Provider>
  );
}