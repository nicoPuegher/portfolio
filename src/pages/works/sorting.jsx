import React, { useContext } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import Context from '@/store/context';
import Section from '@/layouts/section';

export default function Sorting() {
	const context = useContext(Context);

	return (
		<Section title="Sorting Visualizer">
			<Breadcrumb
				display="inline-block"
				spacing="8px"
				separator={<ChevronRightIcon color="gray.500" />}
			>
				<BreadcrumbItem>
					<BreadcrumbLink
						onClick={() => context.handleChangePage('works')}
					>
						Works
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink>Sorting</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		</Section>
	);
}
