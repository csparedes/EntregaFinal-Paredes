import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

const ItemCount = () => {
	return (
		<Grid
			container
			alignItems='center'
			direction='row'
			justifyContent='center'
		>
			<Button
				variant='outlined'
				sx={{ borderRadius: 8 }}
			>
				-
			</Button>
			<Typography sx={{ paddingX: 2 }}>0</Typography>
			<Button
				variant='outlined'
				sx={{ borderRadius: 8 }}
			>
				+
			</Button>
		</Grid>
	);
};

export default ItemCount;
