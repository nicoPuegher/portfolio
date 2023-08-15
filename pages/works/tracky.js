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
      This application allows you to keep track of your expenses, and it has a
      variety of categories to choose for each. Adding more or removing existing
      ones is quick and easy.
    </Paragraph>
    <Paragraph
      fontStyle="italic"
      mb="12px"
      color={useColorModeValue(
        'RGBA(0, 0, 0, 0.64)',
        'RGBA(255, 255, 255, 0.80)',
      )}
    >
      The graph displays monthly expenditures for a quick visual scan. Expenses
      are filtered by year or by month, in descending order. Each item can
      easily be changed or removed.
    </Paragraph>
    <Paragraph
      fontStyle="italic"
      color={useColorModeValue(
        'RGBA(0, 0, 0, 0.64)',
        'RGBA(255, 255, 255, 0.80)',
      )}
    >
      The form has validation and will display what it expects if provided with
      the invalid data. By default this application uses 2022 and 2023 only but
      can be changed accordingly.
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
