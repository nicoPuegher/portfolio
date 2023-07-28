import Section from '../components/section';
import { Heading } from '@chakra-ui/react';
import Paragraph from '../components/paragraph';

const About = () => {
  return (
    <>
      <Section delay={0.1} mb={6}>
        <Heading as="h3" variant="section-title">
          About myself
        </Heading>
        <Paragraph>
          I am a solution-oriented frontend developer, a lifelong self-taught
          student, and a software engineering enthusiast. I enjoy development
          because of the satisfaction I get by overcoming challenges. I am
          motivated by the opportunity that software provides to positively
          impact an individual&apos;s life, myself included.
        </Paragraph>
      </Section>
    </>
  );
};

export default About;
