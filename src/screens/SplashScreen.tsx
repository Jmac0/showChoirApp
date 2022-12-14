import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
});
