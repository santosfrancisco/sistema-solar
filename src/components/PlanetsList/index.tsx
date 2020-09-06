import React from 'react';
import {
  List,
  PlanetCardContainer,
  Wrapper,
  Name,
  PlanetImageWrapper
} from './styles';

import data from '../../data/planets';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../styles/colors';

type Planet = typeof data[0];

interface IPlanet {
  image: any;
  title: string;
  name: string;
}

const PlanetsList: React.FC = () => {
  const navigation = useNavigation()

  const handleClick = (planet: string) => {
    navigation.navigate('Planet', { planetName: planet })
  }

  const PlanetCard: React.FC<IPlanet> = ({ image: Image, title, name }) => {
    return (
      <PlanetCardContainer onPress={() => handleClick(name)}>
        <PlanetImageWrapper>
          <Image width="100%" height={100} />
        </PlanetImageWrapper>
          <Wrapper>
            <Name>{title}</Name>
            <Feather
              name="arrow-right"
              size={16}
              color={colors.gradients.button[1]}
            />
          </Wrapper>
      </PlanetCardContainer>
    )
  }
  return (
    <List >
      {data.map((planet: Planet) => <PlanetCard key={planet.name} {...planet} />)}
    </List>
  );
};

export default PlanetsList;
