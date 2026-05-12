import React from "react";

import {
  SafeAreaView,
  View,
  Text,
} from "react-native";

import styles from "./AuthTemplateStyles";

interface AuthTemplateProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const AuthTemplate = ({
  title,
  subtitle,
  children,
}: AuthTemplateProps) => {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        {title}
      </Text>

      {
        subtitle &&
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      }

      <View style={styles.formContainer}>
        {children}
      </View>

    </SafeAreaView>
  );
};

export default AuthTemplate;