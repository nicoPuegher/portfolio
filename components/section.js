import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const StyledSection = chakra(motion.section, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

const Section = ({ children, delay = 0, ...props }) => (
  <StyledSection
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7, delay }}
    {...props}
  >
    {children}
  </StyledSection>
);

export default Section;
