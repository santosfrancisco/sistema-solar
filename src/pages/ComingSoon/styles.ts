import styled from 'styled-components/native';
import colors from '../../styles/colors';
import constants from 'expo-constants'
import { Platform } from 'react-native';

export const Container = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'android' ? constants.statusBarHeight : 0}px;
  background: ${colors.brand.background};
`;
