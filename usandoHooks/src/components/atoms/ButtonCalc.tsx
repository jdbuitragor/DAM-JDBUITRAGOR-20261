import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../themes/colors';

interface Props {
  etiqueta: string;
  alPresionar: () => void;
  tipo?: 'numero' | 'operador' | 'especial' | 'igual';
  ancho?: boolean;
}

const ButtonCalc = ({ etiqueta, alPresionar, tipo = 'numero', ancho = false }: Props) => {

  const estilosTipo: Record<string, ViewStyle> = {
    numero: { backgroundColor: '#1E1E2F' },
    operador: { backgroundColor: '#FF8C42' },
    especial: { backgroundColor: '#2EC4B6' },
    igual: { backgroundColor: '#E71D36' },
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        estilos.boton,
        estilosTipo[tipo],
        ancho && estilos.botonAncho
      ]}
      onPress={alPresionar}
    >
      <Text style={[
        estilos.texto,
        tipo === 'operador' || tipo === 'igual' ? estilos.textoFuerte : null
      ]}>
        {etiqueta}
      </Text>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  boton: {
    flex: 1,
    margin: 8,
    borderRadius: 18, // menos circular, más moderno
    height: 70, // altura fija en lugar de aspectRatio
    justifyContent: 'center',
    alignItems: 'center',

    // sombra estilo "card"
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 5, // Android
  },

  botonAncho: {
    flex: 2,
    height: 70,
  },

  texto: {
    color: '#F1F1F1',
    fontSize: 22,
    fontWeight: '400',
  },

  textoFuerte: {
    fontWeight: '700',
    fontSize: 24,
  },
});

export default ButtonCalc;