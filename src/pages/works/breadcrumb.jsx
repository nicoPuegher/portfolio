import React, { useContext } from 'react';
import {
	useColorModeValue,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Flex,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

import Context from '@/store/context';
import CustomBadge from '@/components/ui/custom-badge';
import { light, dark } from '@/lib/colors';

export default function CustomBreadcrumb({ name, year }) {
	const context = useContext(Context);

	return (
		<Breadcrumb
			separator={
				<ChevronRightIcon
					color={useColorModeValue(light.secondary, dark.secondary)}
				/>
			}
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
				<BreadcrumbLink>
					<Flex>
						{name}
						<CustomBadge
							fontWeight="medium"
							ml={1}
							alignSelf="start"
							text={year}
						/>
					</Flex>
				</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
}
CustomBreadcrumb.propTypes = {
	name: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired,
};
