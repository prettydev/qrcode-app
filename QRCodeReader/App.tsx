import "react-native-gesture-handler";
import * as React from "react";
import { Image, Text, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "react-native-splash-screen";

import HomeScreen from "./src/HomeScreen";
import QRScreen from "./src/QRScreen";
import ResultScreen from "./src/ResultScreen";

import icon from "./src/img/icon.png";
import { Styles } from "./src/Styles";

import { StateProvider } from "./src/Store";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QRScreen"
        component={QRScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={Styles.drawer}>
      <View style={Styles.drawerHeader}>
        <Image source={icon} style={Styles.drawerIcon} />
        <Text style={Styles.drawerText}>Reader</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <StateProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
          >
            <Drawer.Screen name="Home" component={HomeStack} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </StateProvider>
  );
};

export default App;
