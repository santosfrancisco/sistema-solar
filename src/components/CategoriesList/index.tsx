import React from 'react';

import { List, CategoryContainer, CategoryIconContainer, CategoryName, CategoryWrapper } from './styles';

import data from './data';

type CategoryItemType = typeof data[0];

interface ICategoryItem {
  Icon: () => JSX.Element;
  name: string;
  colors: string[]
}

const CategoriesList: React.FC = () => {
  const CategoryItem: React.FC<ICategoryItem> = ({ Icon, name, colors }) => (
    <CategoryWrapper>
      <CategoryContainer colors={colors}>
      <CategoryIconContainer>
        <Icon />
      </CategoryIconContainer>
      <CategoryName>{name}</CategoryName>
    </CategoryContainer>
    </CategoryWrapper>
  )
  return (
    <List>
      {data.map((item: CategoryItemType) => <CategoryItem key={item.name} Icon={item.icon} name={item.name} colors={item.colors} />)}
    </List>
  );
};

export default CategoriesList;
