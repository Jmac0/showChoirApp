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
  width: 300px;
  font-size: 20px;
  font-family: ${fonts.fontFamilyHeader};
  border-color: ${colors.darkGrey};
  border-radius: 20px;
  padding: 10px;
  margin-top: 15px;
  border-width: 3px;
`;
