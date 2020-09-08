import styled from 'styled-components/native';
import colors from '../../styles/colors';
import typography from '../../styles/typography';

export const Container = styled.View`
  width: 100%;
  height: 200px;

  background: ${colors.brand.background};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
  padding: 8px;
`;

export const Content = styled.View`
  width: 60%;
  padding: 8px;
`;

export const Title = styled.Text`
  font: ${typography["home-title"]};
  color: ${colors.brand.white};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Summary = styled.Text`
  color: ${colors.brand.white};
  margin-bottom: 20px;
  opacity: .65;
`;

export const Footer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ReadText = styled.Text`
  color: ${colors.brand.white};
`;
