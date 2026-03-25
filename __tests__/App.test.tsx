
import { StatusBar,  useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { CountScreen } from './Components';
import React from 'react';
import { colors } from './themes';
import { appStyles } from './App.style';



type AppProps = {
  atributo: String;
}
let count: number = 0;


const handleOnPress = (value: number) => {
  console.log("Press Button")
  count += value;
  console.log(count)
}


export class App extends React.Component <AppProps> {
  render(){

    const label = "hello world"
    const name = "hello world x2"

    console.log("App Funcionando")
   return (

          <View style={appStyles.safeArea}>
            <view style={appStyles.container}>
            <CountScreen label={label} OnPress={()=>handleOnPress(1)}></CountScreen>
            <CountScreen label={name} OnPress={()=>handleOnPress(2)}></CountScreen>
            </view>
          </View>

     
      );
  }
}

export default App;