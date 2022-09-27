import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledTextInput } from '../styles/Styles';
// TODO delete unused @types and packages
export const SignUP: React.FC = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <StyledTextInput
        placeholder="Type here to translate!"
        onChangeText={(newText: string) => setText(newText)}
        defaultValue={text}
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
