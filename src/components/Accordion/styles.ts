import styled, { css } from 'styled-components/native';
import typography from '../../styles/typography';
import colors from '../../styles/colors';

export const Container = styled.View`

`;

export const Title = styled.Text`
  margin-left: 16px;
  font: ${typography["button-title"]};
`

export const Row = styled.TouchableOpacity<{ first: boolean }>`
  flex-direction: row;
  align-items: center;
  height: 56px;
  background-color: #fff;
  ${({ first }) => !first && css`
    border-top-width: 1px;
    border-top-color: ${`${colors.brand.background}20`};
  `
  }
  
`

export const ContentWrapper = styled.View`
  height: 1px;
  width: 100%;
`

export const Content = styled.View`
  padding: 16px;
`
