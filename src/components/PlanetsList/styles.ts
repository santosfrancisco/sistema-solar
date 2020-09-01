import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../styles/colors';
import typography from '../../styles/typography';

export const List = styled.ScrollView.attrs({
  horizontal: true
})`
  padding: 8px 0 24px;
  margin-bottom: 24px;
`;

export const PlanetCardContainer = styled.TouchableOpacity`
  width: 200px;
  height: 290px;

  background: ${colors.brand.background};
  border-radius: 8px;
  margin-right: 16px;
  border-radius: 8px;
`;

export const PlanetImageWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const PlanetImage = styled.Image`
  width: ${({ name }: { name: string }) => name === 'Saturno' ? '90%' : '55%'};
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const Name = styled.Text`
  font: ${typography["button-title"]};
  color: ${colors.brand.white};
`;


