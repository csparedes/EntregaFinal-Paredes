import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useContext } from 'react';
import { CartContext } from '../../context/ShopingCartContext';
import Brand from './Brand';
import CartWidget from './CartWidget';
import CategoryButtons from './CategoryButtons';

const NavBar = () => {
	const [cartList] = useContext(CartContext);
	return (
		<Box sx={{ flexGrow: 1, p: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Brand />
					<Box sx={{ flexGrow: 1 }} />
					<CategoryButtons />
					<CartWidget numberItemsCar={cartList.length} />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
