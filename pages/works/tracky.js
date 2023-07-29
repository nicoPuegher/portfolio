import {
  Container,
  Badge,
  List,
  ListItem,
  Link,
  Wrap,
  SimpleGrid,
} from '@chakra-ui/react';
import Section from '../../components/section';
import {
  WorkTitle,
  WorkBadge,
  StackBadge,
  WorkImage,
} from '../../components/work';
import Paragraph from '../../components/paragraph';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import trackyThumb from '../../public/images/works/tracky.png';
import trackyMobile1 from '../../public/images/works/tracky-mobile1.png';
import trackyMobile2 from '../../public/images/works/tracky-mobile2.png';

const SectionTitle = () => (
  <WorkTitle>
    Tracky <Badge fontSize={13}>2023-</Badge>
  </WorkTitle>
);

const Description = () => (
  <Paragraph fontWeight="600" mb="12px">
    Fully responsive expense tracker frontend web application.
  </Paragraph>
);

const PersonalTake = () => (
  <>
    <Paragraph fontStyle="italic" mb="12px" opacity="0.9">
      My projects were not aging well so I wanted to build something new to
      demonstrate my actual skills while solving a personal problem of mine and
      at the same time learn new technologies to expand my knowledge.
    </Paragraph>
    <Paragraph fontStyle="italic" opacity="0.9">
      Trying these libraries/frameworks helps me decide by myself what to use
      based on personal preferences or project requirements. In this case, I
      wanted to learn Tailwind CSS, Material UI, and build my project with Vite.
    </Paragraph>
  </>
);

const DemoItem = () => (
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
);

const Tracky = () => {
  return (
    <Container>
      <Section delay={0.1}>
        <SectionTitle />
        <Description />
        <PersonalTake />

        <List mt={3} mb={6}>
          <DemoItem />

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

        <WorkImage
          image={trackyThumb}
          alt="Tracky web application desktop screenshot"
        />
        <SimpleGrid columns={2} mt={3} gap={3}>
          <WorkImage
            image={trackyMobile1}
            alt="Tracky web application mobile screenshot"
          />
          <WorkImage
            image={trackyMobile2}
            alt="Tracky web application mobile screenshot"
          />
        </SimpleGrid>
      </Section>
    </Container>
  );
};

export default Tracky;
