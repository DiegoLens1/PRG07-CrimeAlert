import {
  View,
  Switch,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import ThemeContext from "../context/themeContext";

export default function Settings() {
  //state voor dark mode switch
  const [isEnabled, setIsEnabled] = useState(theme === "light" ? true : false);
  //haal context op om in dit component te gebruiken
  const { theme, setTheme } = useContext(ThemeContext);
  //veranderd state voor switch en toggled theme tussen light en dark
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <React.Fragment>
      <View
        style={[
          styles.header,
          theme === "light" ? styles.lightPrimary : styles.darkPrimary,
        ]}
      >
        <SafeAreaView style={[styles.headerContainer]}>
          <Text style={[styles.headerText, styles.darkText]}>Settings</Text>
        </SafeAreaView>
      </View>
      <SafeAreaView
        style={[
          styles.container,
          theme === "light" ? styles.lightBackground : styles.darkBackground,
        ]}
      >
        <ScrollView>
          <View style={styles.darkModeWrapper}>
            <Text
              style={[
                styles.settingText,
                theme === "light" ? styles.lightText : styles.darkText,
              ]}
            >
              Dark mode
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  lightBackground: {
    backgroundColor: "#f0f0f0",
  },
  darkBackground: {
    backgroundColor: "#242c40",
  },
});
