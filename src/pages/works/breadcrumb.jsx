import React, { useContext } from 'react';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Badge,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

import Context from '@/store/context';

export default function CustomBreadcrumb({ name, year }) {
	const context = useContext(Context);

	return (
		<Breadcrumb
			separator={<ChevronRightIcon color="gray.500" />}
			display="inline-block"
			spacing={2}
		>
			<BreadcrumbItem>
				<BreadcrumbLink
					onClick={() => context.handleChangePage('works')}
				>
					Works
				</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink>{name}</BreadcrumbLink>
				<Badge ml={1}>{year}</Badge>
			</BreadcrumbItem>
		</Breadcrumb>
	);
}
CustomBreadcrumb.propTypes = {
	name: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired,
};
