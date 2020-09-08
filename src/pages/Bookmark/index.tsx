import React, { useEffect, useState } from 'react';
import { Text, AsyncStorage } from 'react-native';

import planetsData from '../../data/planets'
import Layout from '../../components/Layout';
import PlanetBigCard from '../../components/PlanetBigCard';
import { useFocusEffect } from '@react-navigation/native';
import { EmptyState } from './styles';

type Planet = typeof planetsData[0];

const Bookmark: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([])
  useFocusEffect(
    React.useCallback(() => {
      async function getBookmarked(){
        const storePlanets = await AsyncStorage.getItem('planets') || '';
        const bookmarkedPlanets = planetsData.filter(planet => storePlanets.split(',').includes(planet.name))
        setPlanets(bookmarkedPlanets)
      }
  
      getBookmarked();
    }, [])
  );
  return (
    <Layout>
      {planets.length > 0 
        ? planets.map(p => (<PlanetBigCard key={p.name} planet={p} />))
        : <EmptyState />
      }
    </Layout>
  );
};

export default Bookmark;
