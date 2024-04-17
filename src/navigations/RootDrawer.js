import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import Detail from "../screens/Detail";

const Drawer = createDrawerNavigator();

const RootDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Detail" component={Detail} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootDrawer;
