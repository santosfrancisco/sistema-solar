import React, { useState, useEffect } from 'react';
import planets from '../../data/planets'
import {
  Container,
  GoBack,
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
import { Text, View, AsyncStorage } from 'react-native';
import colors from '../../styles/colors';

type ParamsList = {
  Planet: { planetName: string };
};


const PlanetDetails: React.FC = () => {
  const [bookmarked, setBookmarked] = useState(false)
  const route = useRoute<RouteProp<ParamsList, 'Planet'>>();
  const { planetName } = route.params
  const { image: Image, title, ...planet } = planets.find(p => p.name === planetName)!

  async function getBookmarked(){
    const savedPlanets = await AsyncStorage.getItem('planets') || ''
    setBookmarked(!!savedPlanets.split(',').find(p => p === planet.name ))
    return savedPlanets;
  }


  useEffect(() => {
    getBookmarked()
  }, [])

  const handleBookmark = async (selectedPlanet: string) => {
    try {
      const planets = await getBookmarked()
      const planetsArr = planets.split(',')

      const isBookmarked = planetsArr.find(p => {
        return p === selectedPlanet
      })

      if(!isBookmarked) {
        planetsArr.push(selectedPlanet)
        setBookmarked(true)
      } else {
        planetsArr.splice(planetsArr.indexOf(selectedPlanet), 1)
        setBookmarked(false)
      }

      await AsyncStorage.setItem('planets', planetsArr.toString())
    } catch (e) {
      console.log("TCL: handleBookmark -> e", e)
      // saving error
    }
  }

  return (
    <Container>
      <Background resizeMode="cover" source={require('../../assets/backgrounds/constellation.png')} />
      <ContentWrapper>
        <Header>
        <Title>{title}</Title>
        <ActionsWrapper>
          <Icon name="bookmark" size={24} color={bookmarked ? colors.gradients.button[1] : colors.brand.background} onPress={() => handleBookmark(planet.name)} />
          <Icon name="share-2" size={24} color={colors.brand.background} />
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
        <GoBack />
      </ImageWrapper>
    </Container>
  );
};

export default PlanetDetails;
