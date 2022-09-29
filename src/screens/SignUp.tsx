import React from 'react';
import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {
  StyledButton,
  StyledTextInput,
  ButtonText,
  colors,
  StyledContainer,
} from '../styles/Styles';
import { Logo } from '../../assets/svgs/Logo';

type signUpFormType = {
  firstName: string;
  lastName: string;
  email: string;
};
export const SignUP: React.FC = () => {
  // from react-hook-form
  const {
    register,
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
    <StyledContainer>
      <Logo fill={colors.lightGold} stroke={colors.lightGold} size={190} />
      <View style={{ height: 15 }}>
        {errors.firstName && <Text>Please enter your first name</Text>}
      </View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledTextInput
            {...register('firstName', { required: true })}
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />

      <View style={{ height: 15 }}>
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
      <View style={{ height: 15 }}>
        {errors.email && <Text>{errors.email.message}</Text>}
      </View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledTextInput
            {...register('email', {
              required: true,
              pattern: {
                value: /^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      <StyledButton
        onPress={handleSubmit(onSubmit)}
        style={({ pressed }) => [
          { backgroundColor: pressed ? colors.lightGold : colors.gold },
        ]}>
        <ButtonText>Submit</ButtonText>
      </StyledButton>
    </StyledContainer>
  );
};
