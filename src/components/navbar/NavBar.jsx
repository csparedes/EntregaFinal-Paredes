import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Brand from './Brand';
import CartWidget from './CartWidget';
import CategoryButtons from './CategoryButtons';

const NavBar = () => {
	return (
		<Box sx={{ flexGrow: 1, p: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Brand />
					<Box sx={{ flexGrow: 1 }} />
					<CategoryButtons />
					<CartWidget numberItemsCar={20} />
					
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
