import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const GoBack: React.FC = (props) => {
  const navigation = useNavigation()
  const handlePress = () => {
    navigation.goBack()
  }
  return (
    <Container {...props}>
    <TouchableOpacity onPress={handlePress}>
        <Feather name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>
    </Container>
  );
};

export default GoBack;
