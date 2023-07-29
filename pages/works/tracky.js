import { Container, Badge } from '@chakra-ui/react';
import Section from '../../components/section';
import { WorkTitle } from '../../components/work';
import Paragraph from '../../components/paragraph';

const Tracky = () => {
  return (
    <Container>
      <Section delay={0.1}>
        <WorkTitle>
          Tracky <Badge fontSize={13}>2023-</Badge>
        </WorkTitle>

        <Paragraph fontWeight="600" mb="12px">
          Fully responsive expense tracker frontend web application.
        </Paragraph>

        <Paragraph fontStyle="italic" mb="12px" opacity="0.9">
          My projects were not aging well so I wanted to build something new to
          demonstrate my actual skills while solving a personal problem of mine
          and at the same time learn new technologies to expand my knowledge.
        </Paragraph>
        <Paragraph fontStyle="italic" opacity="0.9">
          Trying these libraries/frameworks helps me decide by myself what to
          use based on personal preferences or project requirements. In this
          case, I wanted to learn Tailwind CSS, Material UI, and build my
          project with Vite.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Tracky;
