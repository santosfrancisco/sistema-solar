import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import colors from '../../styles/colors';
import SolarSystem from '../../components/backgrounds/SolarSystem'
import {
  Container,
  BGWrapper,
  Subtitle,
  Title,
  ContentWrapper,
  ButtonWrapper,
  ReadyText,
  BeginButton,
  ButtonText,
} from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation()

  const handleClick = () => {
    navigation.navigate('App')
  }
  return (
    <Container>
      <BGWrapper>
        <SolarSystem />
      </BGWrapper>
      <ContentWrapper>
        <Subtitle>
          Aperte o cinto
        </Subtitle>
        <Title>
          Comece sua jornada pelo sistema solar.
        </Title>
        </ContentWrapper>

        <ButtonWrapper>
          <ReadyText>
            Pronto para a decolagem?
          </ReadyText>
          <TouchableOpacity onPress={handleClick}>
            <BeginButton colors={colors.gradients.button}>
              <ButtonText>Começar agora</ButtonText>
              <Feather
                name="arrow-right"
                size={16}
                color={colors.brand.white}
              />
            </BeginButton>
          </TouchableOpacity>
        </ButtonWrapper>
    </Container>
  );
};

export default Welcome;
