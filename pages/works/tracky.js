import { Container, Badge, List, ListItem, Link, Wrap } from '@chakra-ui/react';
import Section from '../../components/section';
import { WorkTitle, WorkBadge, StackBadge } from '../../components/work';
import Paragraph from '../../components/paragraph';
import { ExternalLinkIcon } from '@chakra-ui/icons';

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

        <List mt={3} mb={6}>
          <ListItem mb={0.5}>
            <WorkBadge>Demo</WorkBadge>
            <Link
              href="https://nicopuegher.github.io/expenses-tracker/"
              target="_blank"
            >
              Live demo application
              <ExternalLinkIcon ml={1} />
            </Link>
          </ListItem>

          <ListItem mb={0.5}>
            <WorkBadge>Source</WorkBadge>
            <Link
              href="https://github.com/nicoPuegher/expenses-tracker"
              target="_blank"
            >
              GitHub repository
              <ExternalLinkIcon ml={1} />
            </Link>
          </ListItem>

          <ListItem display="inline-flex">
            <Wrap spacing={1}>
              <WorkBadge>Stack</WorkBadge>
              <StackBadge>JavaScript</StackBadge>
              <StackBadge>ReactJS</StackBadge>
              <StackBadge>Tailwind CSS</StackBadge>
              <StackBadge>Hero Icons</StackBadge>
              <StackBadge>Headless UI</StackBadge>
              <StackBadge>Material UI</StackBadge>
              <StackBadge>DayJS</StackBadge>
              <StackBadge>Lodash</StackBadge>
              <StackBadge>Prop Types</StackBadge>
              <StackBadge>ESLint</StackBadge>
              <StackBadge>Prettier</StackBadge>
              <StackBadge>Vite</StackBadge>
            </Wrap>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Tracky;
