import {
  Container,
  Text,
  Badge,
  Link,
  List,
  ListItem,
  Wrap,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Section from '../../components/section';
import Paragraph from '../../components/paragraph';
import {
  WorkTitle,
  WorkBadge,
  StackBadge,
  WorkImage,
} from '../../components/work';
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
    <Paragraph
      fontStyle="italic"
      mb="12px"
      color={useColorModeValue(
        'RGBA(0, 0, 0, 0.64)',
        'RGBA(255, 255, 255, 0.80)',
      )}
    >
      My projects were not aging well so I wanted to build something new to
      demonstrate my actual skills while solving a personal problem of mine and
      at the same time learn new technologies to expand my knowledge.
    </Paragraph>
    <Paragraph
      fontStyle="italic"
      color={useColorModeValue(
        'RGBA(0, 0, 0, 0.64)',
        'RGBA(255, 255, 255, 0.80)',
      )}
    >
      Trying libraries and frameworks help me decide by myself what to use based
      on personal preferences or project requirements. In this case, I wanted to
      learn <Text as="b">Tailwind CSS</Text>, <Text as="b">Material UI</Text>,
      and build my project with <Text as="b">Vite</Text>.
    </Paragraph>
  </>
);

const DemoItem = () => (
  <ListItem mb={0.5}>
    <WorkBadge>Demo</WorkBadge>
    <Link
      href="https://nicopuegher.github.io/expenses-tracker/"
      target="_blank"
      variant="external-link"
    >
      Live demo application
      <ExternalLinkIcon ml={1} />
    </Link>
  </ListItem>
);

const GitItem = () => (
  <ListItem mb={0.5}>
    <WorkBadge>Source</WorkBadge>
    <Link
      href="https://github.com/nicoPuegher/expenses-tracker"
      target="_blank"
      variant="external-link"
    >
      GitHub repository
      <ExternalLinkIcon ml={1} />
    </Link>
  </ListItem>
);

const StackItem = () => (
  <ListItem display="inline-flex">
    <Wrap spacing={1}>
      <WorkBadge>Stack</WorkBadge>
      <StackBadge>JavaScript</StackBadge>
      <StackBadge>React.js</StackBadge>
      <StackBadge>Tailwind CSS</StackBadge>
      <StackBadge>Heroicons</StackBadge>
      <StackBadge>Headless UI</StackBadge>
      <StackBadge>Material UI</StackBadge>
      <StackBadge>Day.js</StackBadge>
      <StackBadge>Lodash</StackBadge>
      <StackBadge>PropTypes</StackBadge>
      <StackBadge>ESLint</StackBadge>
      <StackBadge>Prettier</StackBadge>
      <StackBadge>Vite</StackBadge>
    </Wrap>
  </ListItem>
);

const CustomList = () => (
  <List mt={3} mb={6}>
    <DemoItem />
    <GitItem />
    <StackItem />
  </List>
);

const DesktopImage = () => (
  <WorkImage
    image={trackyThumb}
    alt="Tracky web application desktop screenshot"
  />
);

const MobileImage = () => (
  <WorkImage
    image={trackyMobile1}
    alt="Tracky web application mobile screenshot"
  />
);

const MobileModalImage = () => (
  <WorkImage
    image={trackyMobile2}
    alt="Tracky web application mobile screenshot"
  />
);

const MobileImages = () => (
  <SimpleGrid columns={2} mt={3} gap={3}>
    <MobileImage />
    <MobileModalImage />
  </SimpleGrid>
);

const Tracky = () => (
  <Container>
    <Section delay={0.1}>
      <SectionTitle />
      <Description />
      <PersonalTake />
      <CustomList />
      <DesktopImage />
      <MobileImages />
    </Section>
  </Container>
);

export default Tracky;
