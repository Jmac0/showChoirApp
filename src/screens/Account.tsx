import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Account: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Account Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
