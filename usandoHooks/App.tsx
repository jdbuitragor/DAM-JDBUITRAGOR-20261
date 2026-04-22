import React from 'react';
import { StatusBar } from 'react-native';
import CalculateScreen from './src/screens/CalculateScreen';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#050816" />
      <CalculateScreen />
    </>
  );
}