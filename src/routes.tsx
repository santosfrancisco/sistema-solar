import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';
import colors from './styles/colors';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
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
      inactiveTintColor: colors.brand.background,
      activeTintColor: colors.brand.white
    }}>
      <Screen
        name="Inicio"
        component={View}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Feather 
                name="home"
                size={size}
                color={focused ? colors.brand.white : colors.brand.background}
              />
            )
          }
        }} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;