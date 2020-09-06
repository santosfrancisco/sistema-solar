import React, { Component, useState } from 'react';
import {
  Container,
  Title,
  Row,
  ContentWrapper,
  Content
} from './styles'
import { Feather } from '@expo/vector-icons';

type AccordionProps = {
  title: string;
  first?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, first }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpand = () => {
    setExpanded(!expanded)
  }
  return (
    <Container>
      <Row first={first} onPress={toggleExpand}>
        <Feather name={expanded ? 'chevron-up' : 'chevron-down'} size={24} />
        <Title>{title}</Title>
      </Row>
      <ContentWrapper />
      {expanded &&
        <Content>
          {children}
        </Content>
      }
    </Container>
  )
}

export default Accordion
