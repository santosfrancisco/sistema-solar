import styled from 'styled-components/native';
import colors from '../../styles/colors';
import constants from 'expo-constants'
import { Platform } from 'react-native';
import typography from '../../styles/typography';

export const Container = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'android' ? constants.statusBarHeight : 0}px;
  background: ${colors.brand.background};
`;

export const EmptyState = styled.Text.attrs({
  children: 'Você ainda não salvou nenhum planeta :)'
})`
  color: ${colors.brand.white};
  font: ${typography["home-title"]};
  text-align: center;
`;
