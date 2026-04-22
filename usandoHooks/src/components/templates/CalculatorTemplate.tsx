import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Calculator } from '../organisms';

const CalculatorTemplate = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0F1A" />
      <Calculator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0B0F1A',
    paddingTop: 10,
  },
});

export default CalculatorTemplate;