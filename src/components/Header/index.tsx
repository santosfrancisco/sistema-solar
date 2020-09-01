import React from 'react';
import { Text } from 'react-native';

import { Feather } from '@expo/vector-icons'

import { 
  Container,
  LeftSide,
  Title,
  Username,
  SubTitle,
  RightSide,

 } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <Title>
          Olá, <Username>Francisco</Username>
        </Title>
        <SubTitle>
          O que você vai aprender hoje?
        </SubTitle>
      </LeftSide>
      <RightSide>
        <Feather name="settings" />
      </RightSide>
    </Container>
  );
};

export default Header;
