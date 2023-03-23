import { useContext, useEffect, useState, forwardRef } from 'react';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	Snackbar,
	Typography,
} from '@mui/material';
import { CartContext } from '../../context/ShopingCartContext';
import Swal from 'sweetalert2';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
	return (
		<MuiAlert
			elevation={6}
			ref={ref}
			variant='filled'
			{...props}
		/>
	);
});

export const CartDetail = ({
	id,
	nameProduct,
	description,
	price,
	quantity,
}) => {
	const [
		_cartList,
		_setCartList,
		_addProductToCart,
		_removeProductFromCart,
		lessProductToCart,
		_cleanCart,
		moreProductToCart,
	] = useContext(CartContext);

	const [notificationMessagge, setNotificationMessagge] = useState('');
	const [openSnackBar, setOpenSnackBar] = useState(false);
	const handleOpenSnack = () => {
		setOpenSnackBar(true);
	};
	const handleCloseSnack = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpenSnackBar(false);
	};

	useEffect(() => {
		if (notificationMessagge !== '') {
			handleOpenSnack();
		}
	}, [notificationMessagge]);

	const onHandleMoreProduct = () => {
		const response = moreProductToCart(id);
		setNotificationMessagge(response.msg);
	};
	const onHandleLessProduct = () => {
		const response = lessProductToCart(id);
		setNotificationMessagge(response.msg);
	};

	

	return (
		<>
			<Snackbar
				open={openSnackBar}
				autoHideDuration={3000}
				onClose={handleCloseSnack}
			>
				<Alert
					onClose={handleCloseSnack}
					severity='success'
				>
					{notificationMessagge}
				</Alert>
			</Snackbar>
			<Grid item>
				<Card sx={{ width: 400, height: 175 }}>
					<CardContent>
						<Typography
							variant='h6'
							sx={{ fontSize: 16 }}
						>
							{nameProduct}
						</Typography>
						<Typography>{description}</Typography>
						<Typography
							variant='h6'
							sx={{ fontSize: 16 }}
						>
							Valor unitario: {price.toFixed(2)}
						</Typography>
						<Typography
							variant='h6'
							sx={{ fontSize: 15 }}
						>
							Cantidad: {quantity}
						</Typography>
					</CardContent>
					<CardActions>
						<Grid
							container
							direction='row'
							alignItems='center'
							justifyContent='space-around'
						>
							<Button
								size='small'
								onClick={onHandleLessProduct}
							>
								Descomprar 1 menos
							</Button>
							<Button
								size='small'
								onClick={onHandleMoreProduct}
							>
								Comprar 1 más
							</Button>
						</Grid>
					</CardActions>
				</Card>
			</Grid>
		</>
	);
};
