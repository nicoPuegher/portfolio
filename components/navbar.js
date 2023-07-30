import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Flex,
  Link,
  Stack,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import Logo from './logo';
import ThemeToggle from './theme-toggle';

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const activeColor = useColorModeValue('white', 'gray.800');
  const activeBg = useColorModeValue('teal.500', 'blue.200');
  const activeHover = useColorModeValue('teal.600', 'blue.300');
  const inactiveColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.900');

  return (
    <Link
      as={NextLink}
      href={href}
      target={target}
      fontWeight={active ? 'semibold' : ''}
      p={2}
      borderRadius="md"
      color={active ? activeColor : inactiveColor}
      bg={active ? activeBg : undefined}
      _hover={active ? { backgroundColor: activeHover } : undefined}
      {...props}
    >
      {children}
    </Link>
  );
};

const NavLogo = () => (
  <Flex mr={5}>
    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
      <Logo />
    </Heading>
  </Flex>
);

const LinkedinLink = ({ path }) => (
  <LinkItem
    href="https://www.linkedin.com/in/nicolas-puegher/"
    target="_blank"
    path={path}
    display="inline-flex"
    alignItems="center"
    style={{ gap: 4 }}
  >
    <FaLinkedin />
    LinkedIn
  </LinkItem>
);

const GithubLink = ({ path }) => (
  <LinkItem
    href="https://github.com/nicoPuegher"
    target="_blank"
    path={path}
    display="inline-flex"
    alignItems="center"
    style={{ gap: 4 }}
  >
    <FaGithubSquare />
    GitHub
  </LinkItem>
);

const NavStack = ({ path }) => (
  <Stack
    display={{ base: 'none', md: 'flex' }}
    direction="row"
    flexGrow={1}
    justify="end"
  >
    <LinkItem href="/about" path={path}>
      About
    </LinkItem>
    <LinkItem href="/works" path={path}>
      Works
    </LinkItem>
    <LinkedinLink path={path} />
    <GithubLink path={path} />
  </Stack>
);

const LinkedinMobile = ({ bg }) => (
  <MenuItem
    as={LinkItem}
    href="https://www.linkedin.com/in/nicolas-puegher/"
    target="_blank"
    bg={bg}
  >
    LinkedIn
  </MenuItem>
);

const GithubMobile = ({ bg }) => (
  <MenuItem
    as={LinkItem}
    href="https://github.com/nicoPuegher"
    target="_blank"
    bg={bg}
  >
    GitHub
  </MenuItem>
);

const MenuListMobile = () => (
  <MenuList bg={useColorModeValue('white', 'black')}>
    <MenuItem as={LinkItem} href="/about" bg="inherit">
      About
    </MenuItem>
    <MenuItem as={LinkItem} href="/works" bg="inherit">
      Works
    </MenuItem>
    <LinkedinMobile bg="inherit" />
    <GithubMobile bg="inherit" />
  </MenuList>
);

const NavbarMobile = () => (
  <Box flex={{ base: 1, md: 0 }} ml={4} align="right">
    <ThemeToggle />
    <Box display={{ base: 'inline-block', md: 'none' }}>
      <Menu isLazy>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Options"
          ml={3}
          color={useColorModeValue('blackAlpha.800', 'whiteAlpha.900')}
          _hover={{
            backgroundColor: useColorModeValue(
              'blackAlpha.100',
              'whiteAlpha.300',
            ),
          }}
        />
        <MenuListMobile />
      </Menu>
    </Box>
  </Box>
);

const CustomContainer = ({ children }) => (
  <Container
    maxW="container.md"
    display="flex"
    wrap="wrap"
    p={2}
    align="center"
    justify="space-between"
  >
    {children}
  </Container>
);

const CustomBox = props => (
  <Box
    as="nav"
    w="100%"
    position="fixed"
    style={{ backdropFilter: 'blur(10px' }}
    bg={useColorModeValue('blackAlpha.50', 'blackAlpha.50')}
    zIndex={2}
    {...props}
  >
    {props.children}
  </Box>
);

const Navbar = props => {
  const { path } = props;

  return (
    <CustomBox>
      <CustomContainer>
        <NavLogo />
        <NavStack path={path} />
        <NavbarMobile />
      </CustomContainer>
    </CustomBox>
  );
};

export default Navbar;
