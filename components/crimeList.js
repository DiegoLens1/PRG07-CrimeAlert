import { StyleSheet, FlatList, View, SafeAreaView, Text } from "react-native";
import React, { useContext } from "react";
import CrimeDataContext from "../context/crimeDataContext";
import ListRenderItem from "./listRenderItem";
import ThemeContext from "../context/themeContext";

export default function CrimeList({ setRegionState, navigation }) {
  //haal context op om in dit component te gebruiken
  const { crimeData } = useContext(CrimeDataContext);
  const { theme } = useContext(ThemeContext);
  return (
    <React.Fragment>
      <View
        style={[
          styles.header,
          theme === "light" ? styles.lightPrimary : styles.darkPrimary,
        ]}
      >
        <SafeAreaView style={[styles.headerContainer]}>
          <Text style={[styles.headerText, styles.darkText]}>
            High crimrate areas
          </Text>
        </SafeAreaView>
      </View>
      <SafeAreaView
        style={[
          styles.container,
          theme === "light" ? styles.lightBackground : styles.darkBackground,
        ]}
      >
        <FlatList
          data={crimeData}
          renderItem={({ item }) => (
            <ListRenderItem
              data={item}
              setRegionState={setRegionState}
              navigation={navigation}
            />
          )}
        />
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  liStyle: {
    padding: 10,
    fontSize: 26,
  },
  lightBackground: {
    backgroundColor: "#f0f0f0",
  },
  darkBackground: {
    backgroundColor: "#242c40",
  },
  header: {
    height: 100,
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
  },
  darkModeWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    padding: 20,
  },
  settingText: {
    fontSize: 25,
  },
  lightPrimary: {
    backgroundColor: "rgb(0, 122, 255)",
  },
  darkPrimary: {
    backgroundColor: "#394153",
  },
  lightText: {
    color: "rgb(28, 28, 30)",
  },
  darkText: {
    color: "rgb(229, 229, 231)",
  },
});
