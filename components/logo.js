import Link from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-size: 1.125rem;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = () => {
  return (
    <Link href="/">
      <LogoBox>
        <Text color={useColorModeValue('blackAlpha.800', 'whiteAlpha.900')}>
          Nicolas Puegher
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
