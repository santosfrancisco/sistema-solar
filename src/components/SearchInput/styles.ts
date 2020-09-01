import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';
import typography from '../../styles/typography';

export const Container = styled.View`
  margin-top: 56px;
  background: ${colors.brand.background};
  flex-direction: row;
  border-radius: 8px;
  align-items: center;
`;

export const SearchField = styled.TextInput
  .attrs({
    placeholderTextColor: `${colors.brand.gray}` 
  })`
  flex: 1;
  background: ${colors.brand.background};
  border-radius: 8px;
  height: 50px;
  padding: 8px;
  color: ${colors.brand.white};
  font: ${typography.placeholder};
`;

export const SearchIcon = styled(Feather).attrs({
  name: 'search',
  size: 24,
  color: colors.brand.white,
})`
  padding: 10px;
`
