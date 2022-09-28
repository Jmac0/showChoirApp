import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { StyledButton, StyledTextInput, ButtonText } from '../styles/Styles';
// TODO delete unused @types and packages
type signUpFormType = {
  firstName: string;
  lastName: string;
  email: string;
};
export const SignUP: React.FC = () => {
  // from react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  const onSubmit = (data: signUpFormType) => {
    console.warn(data);
  };
  return (
    <View style={styles.container}>
      <View style={{ height: 20 }}>
        {errors.firstName && <Text>Please enter your first name</Text>}
      </View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledTextInput
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            Jamie
            value={value}
          />
        )}
        name="firstName"
      />

      <View style={{ height: 20 }}>
        {errors.lastName && <Text>Please enter your last name</Text>}
      </View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledTextInput
            placeholder="Last name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      <View style={{ height: 20 }}>
        {errors.email && <Text>Please enter your email</Text>}
      </View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledTextInput
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      <StyledButton onPress={handleSubmit(onSubmit)}>
        <ButtonText>Submit</ButtonText>
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
