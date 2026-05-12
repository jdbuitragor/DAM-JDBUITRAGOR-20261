import React from "react";

import {
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { Button } from "../../atoms";
import { InputField } from "../../molecules";

import styles from "./LoginFormStyles";

interface LoginFormProps {
  onSubmit: () => void;
  onRegister: () => void;
}

const LoginForm = ({
  onSubmit,
  onRegister,
}: LoginFormProps) => {
  return (
    <View>

      <InputField
        label="Username"
        placeholder="johndoe"
      />

      <InputField
        label="Password"
        placeholder="********"
        secureTextEntry
      />

      <Button
        title="LOGIN"
        onSubmit={onSubmit}
      />

      <TouchableOpacity onPress={onRegister}>
        <Text style={styles.registerText}>
          Don't have an account? SIGN UP
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default LoginForm;