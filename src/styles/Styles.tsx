import styled from 'styled-components/native';

export const colors = {
  darkGrey: '#505050',
  lightBlack: '#1f1f1f',
  gold: '#CFB53B',
  lightGold: 'rgba(208,181,80,0.76)',
};

export const fonts = {
  fontFamilyHeader: 'Courgette-Regular',
  fontFamilyBold: 'Elephant-Regular',
};

export const StyledContainer = styled.View`
  flex: 1;
  padding-top: 10px;
  background-color: lightgray;
  align-items: center;
`;

export const StyledTextInput = styled.TextInput`
  height: 50px;
  width: 350px;
  font-size: 20px;
  border-radius: 20px;
  border-color: rgba(0, 0, 0, 0.46);
  background-color: #e1e0e0;
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
