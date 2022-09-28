import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StyledButton, StyledTextInput } from '../styles/Styles';
// TODO delete unused @types and packages
type signUpFormType = {
  firstName: string;
  lastName: string;
  email: string;
};
export const SignUP: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const signUpForm: signUpFormType = {
    firstName,
    lastName,
    email,
  };

  // submit form
  const handelSubmitForm = () => {
    // save email to local storage

    // send data to API
    console.log(signUpForm);
  };

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

      <StyledButton
        onPress={handelSubmitForm}
        style={({ pressed }) => [
          { backgroundColor: pressed ? 'red' : 'hotpink' },
        ]}>
        <Text>Submit</Text>
      </StyledButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 80,
  },
});
