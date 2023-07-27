import { useColorModeValue, Link, Box } from '@chakra-ui/react';
import NextLink from 'next/link';

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.900');

  return (
    <Link
      as={NextLink}
      href={href}
      target={target}
      p={2}
      color={active ? 'purple.50' : inactiveColor}
      bg={active ? 'purple.400' : undefined}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = props => {
  const { path } = props;

  return (
    <Box
      as="nav"
      w="100%"
      position="fixed"
      style={{ backdropFilter: 'blur(10px' }}
      bg={useColorModeValue('blackAlpha.50', 'blackAlpha.800')}
      zIndex={2}
      {...props}
    ></Box>
  );
};

export default Navbar;
