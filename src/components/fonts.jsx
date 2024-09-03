import React from 'react';
import { Global } from '@emotion/react';

export default function Fonts() {
	return (
		<Global
			styles={`
				@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    		`}
		/>
	);
}
