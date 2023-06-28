import { StyleSheet, Text, FlatList } from "react-native";
import { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CrimeDataContext from "../context/crimeDataContext";
import ListRenderItem from "./listRenderItem";

export default function CrimeList() {
  //haal crimeData context op om in dit component te gebruiken
  const { crimeData } = useContext(CrimeDataContext);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={crimeData}
        renderItem={({ item }) => (
          <ListRenderItem data={item}/>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  liStyle: {
    padding: 10,
    fontSize: 26,
  },
});
