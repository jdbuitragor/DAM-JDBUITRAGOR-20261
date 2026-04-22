import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CalculatorTemplate } from '../components/templates';

const CalculateScreen = () => {
  return (
    <View style={styles.screen}>
      <CalculatorTemplate />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#050816',
  },
});

export default CalculateScreen;