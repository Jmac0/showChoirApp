import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MemberQrCode: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>QR CODE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
