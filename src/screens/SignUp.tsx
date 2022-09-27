import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledTextInput } from '../styles/Styles';
// TODO delete unused @types and packages
export const SignUP: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <StyledTextInput
        placeholder="First Name"
        onChangeText={(newText: string) => setFirstName(newText)}
        defaultValue={firstName}
      />
      <StyledTextInput
        placeholder="Sir Name"
        onChangeText={(newText: string) => setLastName(newText)}
        defaultValue={lastName}
      />
      <StyledTextInput
        keyboardType="email-address"
        placeholder="Email"
        onChangeText={(newText: string) => setEmail(newText)}
        defaultValue={email}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
