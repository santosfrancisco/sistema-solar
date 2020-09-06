import styled from 'styled-components/native';
import { Platform } from 'react-native';
import constants from 'expo-constants';
import colors from '../../styles/colors';
import typography from '../../styles/typography';
import { Feather } from '@expo/vector-icons';

export const Container = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'android' ? constants.statusBarHeight : 0}px;
  background: ${colors.brand.background};
  flex: 1;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 280px;
  background: ${colors.brand.background};
`;

export const ImageWrapper = styled.View`
  width: 100%;
  height: 280px;
  position: absolute;
  top: 80px;
`;

export const ContentWrapper = styled.ScrollView`
  flex: 1;
  background: ${colors.brand.white};
  padding: 0 16px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
`;

export const Title = styled.Text`
  font: ${typography["home-title"]};
  color: ${colors.brand.background};
`;

export const ActionsWrapper = styled.View`
  flex-direction: row;
`;

export const InfoWrapper = styled.View`
  padding-bottom: 40px;
`;

export const Info = styled.Text`
  margin-top: 40px;
`;

export const Icon = styled(Feather)`
  margin-left: 16px;
`;
