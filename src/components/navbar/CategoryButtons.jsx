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
			<Button><NavLink to={`/category/1`}><Typography sx={{color: 'white'}} >Sport</Typography></NavLink></Button>
			<Button><NavLink to={`/category/2`}><Typography sx={{color: 'white'}} >Daily</Typography></NavLink></Button>
			<Button><NavLink to={`/category/3`}><Typography sx={{color: 'white'}} >Special</Typography></NavLink></Button>
		</ButtonGroup>
	);
};

export default CategoryButtons;
