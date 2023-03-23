import { AddShoppingCartOutlined } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { CartContext } from '../../context/ShopingCartContext';

const ItemCount = ({
	id,
	description,
	idCategory,
	nameProduct,
	price,
	stock,
	urlImage,
}) => {
	const [
		cartList,
		setCartList,
		addProductToCart,
		removeProductFromCart,
		cleanCart,
	] = useContext(CartContext);

	const onHandleAddItemToCart = () => {
		const response = addProductToCart({
			id,
			description,
			idCategory,
			nameProduct,
			price,
			stock,
			urlImage,
			quantity: 1,
		});
		Swal.fire({
			text: response.msg,
			icon: response.ok ? 'success' : 'error',
			timer: 1900,
			showConfirmButton: false,
		});
	};

	return (
		<Grid
			container
			alignItems='end'
			direction='row'
			justifyContent='end'
		>
			<Grid item></Grid>
			<Grid item>
				<Button
					variant='outlined'
					sx={{ borderRadius: 1 }}
					onClick={onHandleAddItemToCart}
				>
					<AddShoppingCartOutlined />
					<Typography sx={{ fontSize: 12 }}>
						Agregar al carrito
					</Typography>
				</Button>
			</Grid>
		</Grid>
	);
};

export default ItemCount;
