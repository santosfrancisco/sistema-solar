import React from 'react';
import planets from '../../data/planets'
import {
  Container,
  Background,
  ImageWrapper,
  ContentWrapper,
  Title,
  Header,
  ActionsWrapper,
  Icon,
  InfoWrapper,
  Info,
} from './styles';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import Accordion from '../../components/Accordion';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

type ParamsList = {
  Planet: { planetName: string };
};

const PlanetDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamsList, 'Planet'>>();
  const { planetName } = route.params

  const { image: Image, title, ...planet } = planets.find(p => p.name === planetName)!

  return (
    <Container>
      <Background resizeMode="cover" source={require('../../assets/backgrounds/constellation.png')} />
      <ContentWrapper>
        <Header>
        <Title>{title}</Title>
        <ActionsWrapper>
          <Icon name="bookmark" size={24} />
          <Icon name="share-2" size={24} />
        </ActionsWrapper>
        </Header>
        <InfoWrapper>
          <Info>
            {planet.info}
          </Info>
        </InfoWrapper>
        <Accordion title="Características orbitais" first>
            {planet.orbitalCharacteristics.map(c => (
              <View key={c.key} style={{  }}>
                <Text style={{ fontWeight: 'bold' }}>{c.key}: </Text>
                <Text style={{ marginBottom: 8 }}>{c.value}</Text>
              </View>
            ))}
        </Accordion>
        <Accordion title="Características físicas">
          {planet.physicalCharacteristics.map(c => (
              <View key={c.key} style={{  }}>
                <Text style={{ fontWeight: 'bold' }}>{c.key}: </Text>
                <Text style={{ marginBottom: 8 }}>{c.value}</Text>
              </View>
            ))}
        </Accordion>
      </ContentWrapper> 

      <ImageWrapper>
        <Image width="100%" height={240}/>
      </ImageWrapper>
    </Container>
  );
};

export default PlanetDetails;
