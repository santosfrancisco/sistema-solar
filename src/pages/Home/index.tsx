import React from 'react';

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import SearchInput from '../../components/SearchInput';

import { SectionTitle } from './styles';
import CategoriesList from '../../components/CategoriesList';
import PlanetsList from '../../components/PlanetsList';

const ComingSoon: React.FC = () => {
  return (
    <Layout>
      <Header />
      <SearchInput />
      <SectionTitle>Categorias</SectionTitle>
      <CategoriesList />
      <SectionTitle>Planetas</SectionTitle>
      <PlanetsList />
    </Layout>
  );
};

export default ComingSoon;
