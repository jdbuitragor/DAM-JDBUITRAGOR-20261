import React from 'react';
import {
  Pressable,
  Text,
  GestureResponderEvent,
} from 'react-native';

import styles from './ButtonStyle';

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onSubmit: (event: GestureResponderEvent) => void;
}

const Button = ({ title, disabled, onSubmit }: ButtonProps) => {
  return (
    <Pressable  disabled={disabled} style={styles.button} onPress={onSubmit}>
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;