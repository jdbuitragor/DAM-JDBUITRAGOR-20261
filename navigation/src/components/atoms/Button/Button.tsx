import React from 'react';
import {
  Pressable,
  Text,
  GestureResponderEvent,
} from 'react-native';

import styles from './ButtonStyle';

interface ButtonProps {
  title: string;
  onSubmit: (event: GestureResponderEvent) => void;
}

const Button = ({ title, onSubmit }: ButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onSubmit}>
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;