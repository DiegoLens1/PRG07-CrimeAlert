import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Map from './map';
import CrimeList from './crimeList';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Map} />
      <Tab.Screen name="Settings" component={CrimeList} />
    </Tab.Navigator>
  );
}