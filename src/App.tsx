import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { appStyles } from './App.style';

type AppProps = {}

type AppState = {
  num1: string;
  num2: string;
  result: number;
}

export class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps){
    super(props)

    this.state = {
      num1: '',
      num2: '',
      result: 0
    }
  }

  sum = () => {
    const n1 = parseFloat(this.state.num1)
    const n2 = parseFloat(this.state.num2)

    this.setState({
      result: n1 + n2
    })
  }

  subtract = () => {
    const n1 = parseFloat(this.state.num1)
    const n2 = parseFloat(this.state.num2)

    this.setState({
      result: n1 - n2
    })
  }

  render(){
    return(

      <View style={appStyles.safeArea}>
        <View style={appStyles.container}>

          <Text>Calculadora</Text>

          <TextInput
            placeholder="Ingrese número 1"
            keyboardType="numeric"
            value={this.state.num1}
            onChangeText={(text) => this.setState({num1: text})}
          />

          <TextInput
            placeholder="Ingrese número 2"
            keyboardType="numeric"
            value={this.state.num2}
            onChangeText={(text) => this.setState({num2: text})}
          />

          <Button title="Sumar" onPress={this.sum} />
          <Button title="Restar" onPress={this.subtract} />

          <Text>Resultado: {this.state.result}</Text>

        </View>
      </View>

    )
  }
}

export default App