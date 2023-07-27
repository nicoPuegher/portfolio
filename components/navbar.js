import {
  useColorModeValue,
  Link,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Logo from './logo';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggle from './theme-toggle';

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
    >
      <Container
        maxW="container.md"
        display="flex"
        wrap="wrap"
        p={2}
        align="center"
        justify="space-between"
      >
        <Flex mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

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
          <LinkItem href="/resume" path={path}>
            Resume
          </LinkItem>
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
        </Stack>

        <Box flex={{ base: 1, md: 0 }} ml={2} align="right">
          <ThemeToggle />
          <Box display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                ml={2}
              />
              <MenuList>
                <MenuItem as={LinkItem} href="/about">
                  About
                </MenuItem>
                <MenuItem as={LinkItem} href="/works">
                  Works
                </MenuItem>
                <MenuItem
                  as={LinkItem}
                  href="https://www.linkedin.com/in/nicolas-puegher/"
                  target="_blank"
                >
                  LinkedIn
                </MenuItem>
                <MenuItem
                  as={LinkItem}
                  href="https://github.com/nicoPuegher"
                  target="_blank"
                >
                  GitHub
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
