import { Button, Card, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { CartContext } from '../../context/ShopingCartContext';
import { CartDetail } from './CartDetail';

const Cart = () => {
	const [
		cartList,
		_setCartList,
		_addProductToCart,
		_removeProductFromCart,
		_lessProductToCart,
		cleanCart,
		_moreProductToCart,
	] = useContext(CartContext);
	const sumCartList = () => {
		let sum = 0;
		cartList.map((item) => (sum = item.price * item.quantity + sum));
		return sum.toFixed(2);
	};
	const onClickCleanCart = () => {
		const response = cleanCart();
		Swal.fire({
			text: response.msg,
			icon: 'success',
			timer: 1900,
			showConfirmButton: false,
		});
	};

	const onPayButton = () => {
		Swal.fire({
			text: 'Muchas gracias por tu compra, tu pedido llegara pronto',
			icon: 'success',
		});
		cleanCart();
	};
	return (
		<Grid
			container
			sx={{ padding: 1 }}
			spacing={1}
			direction='column'
			alignItems='center'
			justifyContent='center'
		>
			<Typography>Carrito de compras</Typography>
			{cartList.length === 0 ? (
				<>
					<Typography>El carrito esta vacío :'v</Typography>
					<Typography>
						Compra algo para que no esté vacio :v
					</Typography>
				</>
			) : (
				cartList.map((item, index) => (
					<Grid key={index}>
						<CartDetail {...item} />
					</Grid>
				))
			)}
			{/*  */}
			{cartList.length === 0 ? (
				<Typography></Typography>
			) : (
				<Grid item>
					<Grid
						container
						direction='column'
						alignItems='center'
						justifyContent='center'
					>
						<Grid item>
							<Card sx={{ width: 400, height: 100 }}>
								<Typography
									variant='h5'
									sx={{ padding: 3 }}
								>
									El total de su compra es de: {sumCartList()}
								</Typography>
							</Card>
						</Grid>
						<Grid item>
							<Grid
								container
								direction='row'
								alignItems='center'
								justifyContent='space-around'
								spacing={2}
								sx={{ paddingTop: 2 }}
							>
								<Grid item>
									<Button
										variant='contained'
										onClick={onPayButton}
									>
										Pagar
									</Button>
								</Grid>
								<Grid item>
									<Button
										variant='outlined'
										onClick={onClickCleanCart}
									>
										Limpiar Carrito
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			)}
		</Grid>
	);
};

export default Cart;
