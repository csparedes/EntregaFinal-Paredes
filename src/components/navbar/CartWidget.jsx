import { ShoppingCart } from '@mui/icons-material';
import { Badge, Box, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = ({ numberItemsCar = 0 }) => {
	return (
		<>
			<Box sx={{ display: { xs: 'flex' } }}>
				<IconButton
					size='large'
					color='inherit'
				>
					<Badge
						badgeContent={numberItemsCar}
						color='error'
					>
						<Link to='/cart'>
							<ShoppingCart sx={{ color: 'white' }} />
						</Link>
					</Badge>
				</IconButton>
			</Box>
		</>
	);
};

export default CartWidget;
