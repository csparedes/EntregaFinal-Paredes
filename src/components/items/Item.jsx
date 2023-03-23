import { Link } from 'react-router-dom';
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';

const Item = ({
	id,
	description,
	nameProduct,
	urlImage,
	price,
	stock,
	idCategory,
}) => {
	return (
		<Grid item>
			<Card sx={{
				width: 300
			}}>
				<CardMedia
					sx={{ height: 120 }}
					image={urlImage}
					title={nameProduct}
				/>
				<CardContent>
					<Typography variant='h6' sx={{fontSize: 16}}>{nameProduct}</Typography>
					<Typography>Unidades en stock: {stock}</Typography>
					<Typography>Precio de venta: {price.toFixed(2)}</Typography>
				</CardContent>
				<CardActions>
					<Link to={`/item/${id}`}>Detalles</Link>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Item;
