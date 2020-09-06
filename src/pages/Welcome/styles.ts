import styled from 'styled-components/native';
import colors from '../../styles/colors';
import constants from 'expo-constants';
import { Platform } from 'react-native';
import typography from '../../styles/typography';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'android' ? constants.statusBarHeight : 0}px;
  flex: 1;
`;

export const BGWrapper = styled.View`
  background: ${colors.brand.background};
  position: absolute;
  top: 0;
  left: 0;
`;

export const ContentWrapper = styled.View`
  align-items: center;
  justify-content: center;
  padding: 34px 20px 0;
  flex: 1;
`;

export const Subtitle = styled.Text`
  font: ${typography.paragraph};
  color: ${colors.brand.white};
  opacity: .65;
`;

export const Title = styled.Text`
  font: ${typography["home-title"]};
  color: ${colors.brand.white};
  text-align: center;
`;

export const ButtonWrapper = styled.View`
  align-items: center;

`;

export const ReadyText = styled.Text`
  color: ${colors.brand.white};
  font: ${typography.placeholder};
  margin-bottom: 16px;
`

export const BeginButton = styled(LinearGradient)`
  width: 206px;
  height: 51px;
  border-radius: 8px;
  background: ${colors.gradients.button[1]};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30%;
`

export const ButtonText = styled.Text`
  font: ${typography["button-title"]};
  color: ${colors.brand.white};
  margin-right: 16px;
`
