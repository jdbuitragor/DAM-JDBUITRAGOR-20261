import React from "react";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../Routes";

const LoginPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleAction = () => {
    console.log("Tap en iniciar sesion");
    navigation.navigate("Register");
  };

  return (
    <AuthTemplate title="Login" subtitle="iniciar sesion">
      <LoginForm onSubmit={handleAction} />
    </AuthTemplate>
  );
};

export default LoginPage;