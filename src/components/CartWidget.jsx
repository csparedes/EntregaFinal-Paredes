import { ShoppingCart } from '@mui/icons-material';
import { Badge, Box, IconButton } from '@mui/material';
import React from 'react';

const CartWidget = ({ numberItemsCar = 0}) => {
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
						<ShoppingCart />
					</Badge>
				</IconButton>
			</Box>
		</>
	);
};

export default CartWidget;
