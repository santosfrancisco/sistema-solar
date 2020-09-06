import React from 'react';
import { View } from 'react-native';
import { NavigationContainer, CompositeNavigationProp } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { Feather } from '@expo/vector-icons';
import colors from './styles/colors';
import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon';
import PlanetDetails from './pages/PlanetDetails';
import Welcome from './pages/Welcome';

type HomeStackParamList = {
  Home: undefined;
  Planet: { planetname: string };
};

const { Navigator, Screen } = createBottomTabNavigator();
const MainStack = createStackNavigator();
const HomeStack = createStackNavigator<HomeStackParamList>();



function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Home" headerMode="none">
      <HomeStack.Screen
        name="Home"
        component={Home}
      />
      <HomeStack.Screen
        name="Planet"
        component={PlanetDetails}
      />
    </HomeStack.Navigator>
  );
}

const Routes: React.FC = () => (
    <Navigator
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: colors.brand.background,
          borderTopWidth: 0
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle: {
          fontFamily: 'roboto_regular',
          fontSize: 11,
          marginTop: 5
        },
        inactiveTintColor: colors.brand.gray,
        activeTintColor: colors.brand.white
      }}>
      <Screen
        name="Inicio"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Feather
                name="home"
                size={size}
                color={focused ? colors.brand.white : colors.brand.gray}
              />
            )
          }
        }} />
      <Screen
        name="Buscar"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Feather
                name="search"
                size={size}
                color={focused ? colors.brand.white : colors.brand.gray}
              />
            )
          }
        }} />
      <Screen
        name="Salvos"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Feather
                name="bookmark"
                size={size}
                color={focused ? colors.brand.white : colors.brand.gray}
              />
            )
          }
        }} />
      <Screen
        name="Galeria"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Feather
                name="image"
                size={size}
                color={focused ? colors.brand.white : colors.brand.gray}
              />
            )
          }
        }} />
    </Navigator>
);

function MaintackScreen() {
  return (
  <NavigationContainer>
    <MainStack.Navigator initialRouteName="Welcome" headerMode="none">
        <MainStack.Screen
          name="Welcome"
          component={Welcome}
        />
        <MainStack.Screen
          name="App"
          component={Routes}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default MaintackScreen;