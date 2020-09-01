import React from 'react';
import { Text } from 'react-native';

import { Container, ImageWrapper, Wrapper, Name } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

interface PlanetProps {
  Image: () => JSX.Element;
  name: string;
}

const PlanetCard: React.FC<PlanetProps> = ({ Image, name }) => {
  const navigation = useNavigation()

  const handleClick = () => {

  }

  return (
    <Container>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <Wrapper>
        <Name>{name}</Name>
        <Feather name="arrow-right" onClick={handleClick} />
      </Wrapper>
    </Container>
  );
};

export default PlanetCard;
