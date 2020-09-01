import styled from 'styled-components/native';
import colors from '../../styles/colors';
import constants from 'expo-constants';
import { Platform } from 'react-native';

export const Container = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'android' ? constants.statusBarHeight : 0}px;
`;

export const BGWrapper = styled.View`
  background: ${colors.brand.background};
  position: absolute;
  top: 0;
  left: 0;
`;

export const ContentWrapper = styled.ScrollView`
  padding: 34px 20px 0;
`;
