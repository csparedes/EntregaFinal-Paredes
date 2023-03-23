import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/items/ItemDetailContainer';
import ItemListContainer from './components/items/ItemListContainer';
import Cart from './components/navbar/Cart';
import NavBar from './components/navbar/NavBar';
import ShopingCartProvider from './context/ShopingCartContext';
// import Welcome from './components/welcome/Welcome';

const App = () => {
	return (
		<ShopingCartProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route
						exact
						path='/'
						element={<ItemListContainer />}
					/>
					<Route
						exact
						path='/category/:id'
						element={<ItemListContainer />}
					/>
					<Route
						exact
						path='/item/:id'
						element={<ItemDetailContainer />}
					/>
					<Route
						exact
						path='/cart'
						element={<Cart />}
					/>
				</Routes>
			</BrowserRouter>
		</ShopingCartProvider>
	);
};

export default App;
