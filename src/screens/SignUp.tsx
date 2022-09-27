import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SignUP: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Sign up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
