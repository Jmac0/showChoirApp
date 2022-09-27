import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { theme } from '../theme';

export const SignUP: React.FC = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={theme.textInput}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //backgroundColor: theme.darkGrey,
  },
});
