import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Display, ButtonCalc } from '../atoms';
import { ButtonRow } from '../molecules';

const Calculator = () => {
  const [pantalla, setPantalla] = useState('0');
  const [valorAnterior, setValorAnterior] = useState<number | null>(null);
  const [operacion, setOperacion] = useState<string | null>(null);
  const [resetPantalla, setResetPantalla] = useState(false);

  const inputNumero = (num: string) => {
    if (resetPantalla) {
      setPantalla(num);
      setResetPantalla(false);
    } else {
      setPantalla(pantalla === '0' ? num : pantalla + num);
    }
  };

  const seleccionarOperacion = (op: string) => {
    setValorAnterior(parseFloat(pantalla));
    setOperacion(op);
    setResetPantalla(true);
  };

  const calcular = () => {
    if (valorAnterior === null || !operacion) return;

    const actual = parseFloat(pantalla);
    let res = 0;

    if (operacion === '+') res = valorAnterior + actual;
    if (operacion === '-') res = valorAnterior - actual;
    if (operacion === '×') res = valorAnterior * actual;
    if (operacion === '÷') res = actual !== 0 ? valorAnterior / actual : NaN;

    setPantalla(isNaN(res) ? 'Error' : String(res));
    setOperacion(null);
    setValorAnterior(null);
    setResetPantalla(true);
  };

  const limpiarTodo = () => {
    setPantalla('0');
    setValorAnterior(null);
    setOperacion(null);
    setResetPantalla(false);
  };

  return (
    <View style={styles.container}>
      <Display valor={pantalla} />

      <ButtonRow hijos={
        <>
          <ButtonCalc etiqueta="C" tipo="especial" alPresionar={limpiarTodo} />
          <ButtonCalc etiqueta="÷" tipo="operador" alPresionar={() => seleccionarOperacion('÷')} />
        </>
      } />

      <ButtonRow hijos={
        <>
          <ButtonCalc etiqueta="7" alPresionar={() => inputNumero('7')} />
          <ButtonCalc etiqueta="8" alPresionar={() => inputNumero('8')} />
          <ButtonCalc etiqueta="9" alPresionar={() => inputNumero('9')} />
          <ButtonCalc etiqueta="×" tipo="operador" alPresionar={() => seleccionarOperacion('×')} />
        </>
      } />

      <ButtonRow hijos={
        <>
          <ButtonCalc etiqueta="4" alPresionar={() => inputNumero('4')} />
          <ButtonCalc etiqueta="5" alPresionar={() => inputNumero('5')} />
          <ButtonCalc etiqueta="6" alPresionar={() => inputNumero('6')} />
          <ButtonCalc etiqueta="-" tipo="operador" alPresionar={() => seleccionarOperacion('-')} />
        </>
      } />

      <ButtonRow hijos={
        <>
          <ButtonCalc etiqueta="1" alPresionar={() => inputNumero('1')} />
          <ButtonCalc etiqueta="2" alPresionar={() => inputNumero('2')} />
          <ButtonCalc etiqueta="3" alPresionar={() => inputNumero('3')} />
          <ButtonCalc etiqueta="+" tipo="operador" alPresionar={() => seleccionarOperacion('+')} />
        </>
      } />

      <ButtonRow hijos={
        <>
          <ButtonCalc etiqueta="0" alPresionar={() => inputNumero('0')} ancho />
          <ButtonCalc etiqueta="=" tipo="igual" alPresionar={calcular} />
        </>
      } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F1A',
    paddingHorizontal: 12,
    paddingBottom: 20,
    justifyContent: 'flex-end',
  },
});

export default Calculator;