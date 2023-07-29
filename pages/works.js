import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/section';
import GridItem from '../components/grid-item';
import trackyThumb from '../public/images/works/tracky.png';

const SectionTitle = () => (
  <Heading as="h3" variant="section-title">
    Works
  </Heading>
);

const Tracky = () => (
  <GridItem
    id="tracky"
    title="Tracky"
    thumbnail={trackyThumb}
    description="Fully responsive expense tracker frontend web application"
  />
);

const Works = () => {
  return (
    <Container>
      <Section delay={0.1}>
        <SectionTitle />
        <SimpleGrid>
          <Tracky />
        </SimpleGrid>
      </Section>
    </Container>
  );
};

export default Works;
