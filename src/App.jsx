import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/items/ItemDetailContainer';
import ItemListContainer from './components/items/ItemListContainer';
import Cart from './components/navbar/Cart';
import NavBar from './components/navbar/NavBar';
import Welcome from './components/welcome/Welcome';

const App = () => {
	return (
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
	);
};

export default App;
