import { StyleSheet, Text, View, FlatList } from "react-native";
import { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

export default function CrimeList() {
  const [crimeData, setcrimeData] = useState([]);
  const [isloaded, setisLoaded] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://stud.hosted.hr.nl/1000200/crimeWebservice/'
      );
      const jsonData = await response.json();
      setcrimeData(jsonData);
      setisLoaded(true)
    } catch (error) {
      console.error(error);
    }
  };

  if(!isloaded){
    return(
        <View>
            <Text>Loading...</Text>
        </View>
    )
  }

  else{
    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={crimeData} renderItem={({item}) => <Text style={styles.liStyle}>{item.title}</Text>}/>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  liStyle: {
    padding: 10,
    fontSize: 26,
  },
});