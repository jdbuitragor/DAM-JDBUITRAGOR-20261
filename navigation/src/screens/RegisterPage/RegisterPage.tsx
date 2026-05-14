import React from "react";
import { AuthTemplate } from "../../components/templates";
import { RegisterForm } from "../../components/organisms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../Routes";
import { AuthService } from "../../core/services";

const RegisterPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleRegister = async () => {
    console.log("Register");
    
    const dummyUser = {
        nombre: 'Pepito',
        username: 'aaaaaaa',
        correo: 'aaaaaaaaa@unbosque.edu.co',
        fechaNacimiento: 'asdasdas',
        contrasena: 'fsadasdsadsa'
    }

    await AuthService.register(dummyUser);

  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <AuthTemplate
      title="REGISTER"
      subtitle="Create a new account"
    >
      <RegisterForm disabledAction={false}onSubmit={handleRegister} />
    </AuthTemplate>
  );
};

export default RegisterPage;