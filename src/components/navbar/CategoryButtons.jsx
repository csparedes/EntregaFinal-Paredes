import { Button, ButtonGroup, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryButtons = () => {
	return (
		<ButtonGroup
			variant='outlined'
			aria-label='outlined primary button group'
			color='secondary'
            sx={{paddingX: 2}}
		>
			<Button><NavLink to={`/category/jeN4RIc74sIOEj2FhwRz`}><Typography sx={{color: 'white'}} >Sport</Typography></NavLink></Button>
			<Button><NavLink to={`/category/dUNsZKtHboooF7pseSDS`}><Typography sx={{color: 'white'}} >Daily</Typography></NavLink></Button>
			<Button><NavLink to={`/category/M1kRAeHIlV93PuPIdeA8`}><Typography sx={{color: 'white'}} >Special</Typography></NavLink></Button>
		</ButtonGroup>
	);
};

export default CategoryButtons;
