import React from 'react';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function ButtonCall() {
	return <Button rightIcon={<ArrowForwardIcon />}>Check my work</Button>;
}
