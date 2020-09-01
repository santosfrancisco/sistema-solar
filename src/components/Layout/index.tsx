import React from 'react';

import Constellation from '../../components/backgrounds/Constellation'

import { Container, BGWrapper, ContentWrapper } from './styles';

const Layout: React.FC = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <BGWrapper> 
        <Constellation />
      </BGWrapper>

      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Container>
  );
};

export default Layout;
