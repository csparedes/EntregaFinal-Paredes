import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const Brand = () => {

    const onclickBrand = (event) => {
        event.preventDefault();
        console.log('Brand clicked');
    }

	return (
		<Grid2
			container
			spacing={1}
		>
			<Grid2 item>
				<img
					src='https://res.cloudinary.com/dhulr5xwe/image/upload/v1675816226/dev/ppt5y9chm3rajufh83ea.png'
					height={40}
                    onClick={onclickBrand}
				/>
			</Grid2>
			<Grid2
				item
				alignItems='center'
				justifyContent='center'
				direction='row'
			>
				<Typography
					variant='h6'
					noWrap
					component='div'
                    onClick={onclickBrand}
					sx={{ display: { xs: 'block', sm: 'block' }, fontSize: 24 }}
				>
					CRAVATE
				</Typography>
			</Grid2>
		</Grid2>
	);
};

export default Brand;
