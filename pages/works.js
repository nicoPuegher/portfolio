import { Container, Heading } from '@chakra-ui/react';
import Section from '../components/section';

const Works = () => {
  return (
    <Container>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Works
        </Heading>
      </Section>
    </Container>
  );
};

export default Works;
