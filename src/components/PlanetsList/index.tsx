import React from 'react';
import { List, PlanetCardContainer, PlanetImage, Wrapper, Name, PlanetImageWrapper } from './styles';

import data from './data';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../styles/colors';

type Planet = typeof data[0];

interface PlanetProps {
  image: any;
  name: string;
}

const PlanetsList: React.FC = () => {
  const navigation = useNavigation()

  const handleClick = (planet: string) => {
    navigation.navigate('Planet', { planet })
  }

  const PlanetCard: React.FC<PlanetProps> = ({ image, name }) => {
    return (
      <PlanetCardContainer onPress={() => console.log('click')}>
        <PlanetImageWrapper>
          <PlanetImage source={image} name={name} resizeMode="center" />
        </PlanetImageWrapper>
          <Wrapper>
            <Name>{name}</Name>
            <Feather
              name="arrow-right"
              size={16}
              color={colors.gradients.button[1]}
              onClick={() => handleClick(name)}
            />
          </Wrapper>
      </PlanetCardContainer>
    )
  }
  return (
    <List >
      {data.map((planet: Planet) => <PlanetCard key={planet.name} image={planet.image} name={planet.name} />)}
    </List>
  );
};

export default PlanetsList;
