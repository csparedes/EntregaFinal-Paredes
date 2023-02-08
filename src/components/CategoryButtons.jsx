import { Button, ButtonGroup } from '@mui/material';
import React from 'react';

const CategoryButtons = () => {
	return (
		<ButtonGroup
			variant='outlined'
			aria-label='outlined primary button group'
			color='secondary'
            sx={{paddingX: 2}}
		>
			<Button>Sport</Button>
			<Button>Daily</Button>
			<Button>Special</Button>
		</ButtonGroup>
	);
};

export default CategoryButtons;
