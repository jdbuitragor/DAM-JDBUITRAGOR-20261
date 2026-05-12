import React from "react";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../Routes";

const LoginPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleLogin = () => {
    console.log("Login");
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <AuthTemplate
      title="LOGIN"
      subtitle=""
    >
      <LoginForm
        onSubmit={handleLogin}
        onRegister={goToRegister}
      />
    </AuthTemplate>
  );
};

export default LoginPage;