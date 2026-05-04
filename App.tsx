import React, { FC, useEffect } from "react";
// import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import PersonScreen from "./screens/PersonScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "./types/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import HomeStack from "./navigation/HomeStack";

const Tab = createBottomTabNavigator<RootTabParamList>();

const App: FC = () => {
  useEffect(() => {
    Font.loadAsync(Ionicons.font);
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Inicio"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            let iconName: React.ComponentProps<typeof Ionicons>["name"] = "help-outline"; // valor por defecto
            switch (route.name) {
              case "Inicio":
                iconName = focused ? "home" : "home-outline";
                break;
              case "Buscar":
                iconName = focused ? "search" : "search-outline";
                break;
              case "Mi cuenta":
                iconName = focused ? "person" : "person-outline";
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#2563eb",
          tabBarInactiveTintColor: "#6b7280",
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarStyle: {
            height: 60,
            paddingBottom: 0,
            paddingTop: 5,
          },
        })}
      >
        <Tab.Screen name="Inicio" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Buscar" component={SearchScreen} options={{ tabBarBadge: 5}} />
        <Tab.Screen name="Mi cuenta" component={PersonScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
