import styled from 'styled-components/native';

export const colors = {
  darkGrey: '#505050',
  gold: '#CFB53B',
  lightGold: 'rgba(208,181,80,0.76)',
};

export const fonts = {
  fontFamilyHeader: 'Courgette-Regular',
  fontFamilyBold: 'Elephant-Regular',
};

export const StyledTextInput = styled.TextInput`
  height: 50px;
  width: 350px;
  font-size: 20px;
  border-color: ${colors.darkGrey};
  border-radius: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
  border-width: 3px;
`;

export const StyledButton = styled.Pressable`
  width: 350px;
  height: 40px;
  margin-top: 15px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.darkGrey};
  font-family: ${fonts.fontFamilyHeader};
  font-size: 23px;
`;
