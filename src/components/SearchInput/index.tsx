import React from 'react';
import { Text } from 'react-native';

import { Container, SearchField, SearchIcon } from './styles';

const SearchInput: React.FC = () => {
  return (
    <Container>
      <SearchIcon />
      <SearchField
        placeholder="Procure planetas, asteroides, estrelas..."
        onChangeText={(text) => console.log(text)}
      />
    </Container>
  );
};

export default SearchInput;
