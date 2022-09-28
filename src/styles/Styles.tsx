import styled from 'styled-components/native';

export const colors = {
  darkGrey: '#505050',
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
  padding: 10px;
  margin-top: 15px;
  border-width: 3px;
`;

export const StyledButton = styled.Pressable`
  width: 350px;
  height: 40px;
  margin-top: 15px;
  border-radius: 20px;
  background-color: hotpink;
  justify-content: center;
  align-items: center;
`;
