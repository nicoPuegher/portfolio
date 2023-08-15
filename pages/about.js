import { Container, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';

const CustomParagraph = props => (
  <Paragraph
    color={useColorModeValue(
      'RGBA(0, 0, 0, 0.64)',
      'RGBA(255, 255, 255, 0.80)',
    )}
    {...props}
  >
    {props.children}
  </Paragraph>
);

const Myself = () => (
  <Section delay={0.1} mb={6}>
    <Heading as="h3" variant="section-title">
      About myself
    </Heading>
    <CustomParagraph>
      I am a solution-oriented frontend developer, a lifelong self-taught
      student, and a software engineering enthusiast. I enjoy development
      because of the satisfaction I get by overcoming challenges. I am motivated
      by the opportunity that software provides to positively impact an
      individual&apos;s life, myself included.
    </CustomParagraph>
  </Section>
);

const Experience = () => (
  <Section delay={0.3}>
    <Heading as="h3" variant="section-title">
      My experience
    </Heading>

    <CustomParagraph mb="12px">
      My name is Nicolas, and I am a Software Developer with 1+ year of
      experience working for a small Danish startup and a fairly big American
      company, where my role was to build and test web applications. I had to
      tackle problems in the frontend and backend simultaneously which provided
      a great learning experience, primarily with the same stack:{' '}
      <Text as="b">MongoDB</Text>, <Text as="b">Express.js</Text>,{' '}
      <Text as="b">React.js</Text>, and <Text as="b">Node.js</Text>.
    </CustomParagraph>
    <CustomParagraph mb="12px">
      My hunger for learning led me to look for a curated list of open source
      computer science equivalent courses to step up my game.
    </CustomParagraph>
    <CustomParagraph mb="12px">
      On platforms such as Udemy or LinkedIn, I am a veteran with hundreds of
      hours and around 70+ certifications. Active Leetcode user, I solve at
      least 2 problems a day to improve my algorithm, coding and problem-solving
      skills.
    </CustomParagraph>

    <CustomParagraph mb="12px">
      In my previous roles, I developed a strong understanding of the latest
      trends and technologies in the industry. I have significant experience in
      the use of <Text as="b">HTML5</Text>, <Text as="b">CSS3</Text>,{' '}
      <Text as="b">Sass</Text>, <Text as="b">Tailwind CSS</Text>,{' '}
      <Text as="b">JavaScript</Text>, <Text as="b">React.js</Text>,{' '}
      <Text as="b">Redux</Text>, <Text as="b">Node.js</Text>,{' '}
      <Text as="b">MongoDB</Text>, <Text as="b">Express.js</Text>,{' '}
      <Text as="b">Jest</Text>, and <Text as="b">Git</Text>.
    </CustomParagraph>
    <CustomParagraph>
      Aside from that, I am also used to work with <Text as="b">Chakra UI</Text>
      , <Text as="b">Material UI</Text>,<Text as="b">Tailwind UI</Text>,{' '}
      <Text as="b">ESLint</Text>, <Text as="b">NPM</Text>,{' '}
      <Text as="b">Dev Tools</Text> (<Text as="b">Browser</Text>,{' '}
      <Text as="b">React</Text>, <Text as="b">Redux</Text>),{' '}
      <Text as="b">Jira</Text>, and <Text as="b">Unix Terminal</Text>. My next
      goal is to become proficient with <Text as="b">Next.js</Text> and{' '}
      <Text as="b">TypeScript</Text>.
    </CustomParagraph>
  </Section>
);

const About = () => (
  <Container>
    <Myself />
    <Experience />
  </Container>
);

export default About;
