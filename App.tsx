import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    roboto_regular: Roboto_400Regular,
    roboto_bold: Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Routes />
      <StatusBar style="light" />
    </>
  );
}
