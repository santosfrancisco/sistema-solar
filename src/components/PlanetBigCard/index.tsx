import React from 'react';
import { Text } from 'react-native';

import {
  Container,
  Content,
  Title,
  Header,
  Summary,
  Footer,
  ReadText
} from './styles';

import planets from '../../data/planets'
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';

interface IPlanetBigCard {
  planet: typeof planets[0],
}

const PlanetBigCard: React.FC<IPlanetBigCard> = ({ planet }) => {
  const navigation = useNavigation();
  const { image: Image, info, title, name } = planet;
  const handlePress = (planetName: string) => {
    navigation.navigate('Planet', { planetName })
  }
  return (
    <Container>
      <Image width="40%" height={100} />
      <Content>
        <Header>
          <Title>{title}</Title>
          <Feather name="bookmark" size={24} color={colors.gradients.button[1]} />
        </Header>
        <Summary numberOfLines={5}>
          {info}
        </Summary>
        <Footer onPress={() => handlePress(name)}>
          <ReadText>
            Continue lendo
          </ReadText>
          <Feather name="arrow-right" size={24} color={colors.gradients.button[1]} />
        </Footer>
      </Content>

    </Container>
  );
};

export default PlanetBigCard;
