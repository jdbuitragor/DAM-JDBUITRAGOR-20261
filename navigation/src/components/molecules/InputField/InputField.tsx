import React from "react";

import {
  View,
  Text,
  TextInput,
  TextInputProps,
} from "react-native";

import styles from "./InputFieldStyles";

interface InputFieldProps extends TextInputProps {
  label: string;
}

const InputField = ({
  label,
  ...props
}: InputFieldProps) => {
  return (
    <View style={styles.container}>

      <Text style={styles.label}>
        {label}
      </Text>

      <TextInput
        style={styles.input}
        placeholderTextColor="#999"
        {...props}
      />

    </View>
  );
};

export default InputField;