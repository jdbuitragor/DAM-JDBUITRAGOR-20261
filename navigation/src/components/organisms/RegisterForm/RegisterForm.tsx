import React from "react";

import { View } from "react-native";

import { Button } from "../../atoms";
import { InputField } from "../../molecules";

interface RegisterFormProps {
  onSubmit: () => void;
  disabledAction: boolean;
}

const RegisterForm = ({
  onSubmit, disabledAction
}: RegisterFormProps) => {
  return (
    <View>

      <InputField
        label="FULL NAME"
        placeholder="John Doe"
      />

      <InputField
        label="USERNAME"
        placeholder="johndoe123"
      />

      <InputField
        label="EMAIL ADDRESS"
        placeholder="johndoe@example.com"
      />

      <InputField
        label="DATE OF BIRTH"
        placeholder="YYYY-MM-DD"
      />

      <InputField
        label="PASSWORD"
        placeholder="Minimum 8 chars"
        secureTextEntry
      />

      <InputField
        label="CONFIRM PASSWORD"
        placeholder="Re-enter password"
        secureTextEntry
      />

      <Button
        disabled={false}
        title="CREATE ACCOUNT"
        onSubmit={onSubmit}
      />

    </View>
  );
};

export default RegisterForm;