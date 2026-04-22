import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  hijos: React.ReactNode;
}

const ButtonRow = ({ hijos }: Props) => {
  return <View style={styles.container}>{hijos}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 10,
    marginVertical: 6,
    paddingHorizontal: 8,
  },
});

export default ButtonRow;