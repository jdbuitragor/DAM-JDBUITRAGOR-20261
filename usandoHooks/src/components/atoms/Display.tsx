import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  valor: string;
}

const Display = ({ valor }: Props) => {
  return (
    <View style={estilos.wrapper}>
      <View style={estilos.contenedor}>
        <Text 
          style={estilos.texto} 
          numberOfLines={1} 
          adjustsFontSizeToFit
        >
          {valor}
        </Text>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },

  contenedor: {
    backgroundColor: '#0F172A', 
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,

    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  texto: {
    color: '#E2E8F0',
    fontSize: 52,
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default Display;