import { Container, Heading, useColorModeValue } from '@chakra-ui/react';
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
      I have been learning software engineering for almost four years now, and
      all I can say is that I love it. My experience comes from two different
      positions where I faced many challenges, learned many things, and met
      amazing people.
    </CustomParagraph>
    <CustomParagraph mb="12px">
      Half of that was as a full-stack developer working on-site in Copenhagen,
      Denmark. I spent most of my time working on the application&apos;s UI and
      the backend, primarily with the database and payment processor.
    </CustomParagraph>
    <CustomParagraph>
      The other half was as a software engineer for a US-based company, remotely
      from Buenos Aires, Argentina. Aside from building the UI from Figma files,
      I had to work simultaneously on the application&apos;s authentication and
      unit tests.
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
