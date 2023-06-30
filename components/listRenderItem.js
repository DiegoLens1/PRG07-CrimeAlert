import { useContext, useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import ThemeContext from "../context/themeContext";
import React from "react";
import { View } from "react-native-web";

export default function ListRenderItem({ data }) {
  //haal context op om in dit component te gebruiken
  const { theme } = useContext(ThemeContext);
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <React.Fragment>
      <Pressable
        style={styles.itemWrapper}
        onPress={() => {
          setOpenDetails(!openDetails);
        }}
      >
        <Text
          style={[
            styles.itemText,
            theme === "light" ? styles.lightText : styles.darkText,
          ]}
        >
          {data.title}
        </Text>
      </Pressable>
      {!openDetails ? null : (
        <Pressable style={styles.itemWrapper}>
          <Text
            style={[
              theme === "light" ? styles.lightText : styles.darkText,
            ]}
          >
            {data.description}
          </Text>
        </Pressable>
      )}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemWrapper: {
    padding: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
  },
  itemText: {
    fontSize: 25,
  },
  lightPrimary: {
    backgroundColor: "rgb(0, 122, 255)",
  },
  darkPrimary: {
    backgroundColor: "rgb(10, 132, 255)",
  },
  lightText: {
    color: "rgb(28, 28, 30)",
  },
  darkText: {
    color: "rgb(229, 229, 231)",
  },
  lightBackground: {
    backgroundColor: "#d0d0c0",
  },
  darkBackground: {
    backgroundColor: "#242c40",
  },
});
