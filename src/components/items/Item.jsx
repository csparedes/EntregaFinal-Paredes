import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


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
			<Card>
				<CardMedia
					sx={{ height: 120 }}
					image={urlImage}
					title={nameProduct}
				/>
				<CardContent>
					<Typography>Unidades en stock: {stock}</Typography>
					<Typography>Precio de venta: {price}</Typography>
				</CardContent>
				<CardActions>
					<Link to={`/item/${id}`} >Detalles</Link>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Item;
