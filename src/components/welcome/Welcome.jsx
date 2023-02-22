import { Box, Grid, Typography } from '@mui/material';
import ItemList from '../items/ItemList';

const Welcome = () => {
	return (
		<div>
			<Box
				display='flex'
				boxSizing='content-box'
			>
				<Grid
					container
					direction='column'
					justifyContent='center'
					alignItems='center'
					sx={{paddingX: 1}}
				>
					<Grid item>
						<img
							src='https://www.laguiadelvaron.com/wp-content/uploads/2018/05/perfumes-www.laguidelvaron-1.jpg'
							srcSet='https://www.laguiadelvaron.com/wp-content/uploads/2018/05/perfumes-www.laguidelvaron-1.jpg 800w'
							sizes='(max-width: 400px) 400px'
						/>
					</Grid>
					<Grid item>
						<Typography variant='h2'>Bienvenid@ a CRAVATE</Typography>
					</Grid>
					<Grid item>
						<ItemList />
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default Welcome;
