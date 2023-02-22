import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './components/items/ItemDetail';
import ItemList from './components/items/ItemList';
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
					element={<Welcome />}
				/>
				<Route
					exact
					path='/category/:id'
					element={<ItemList />}
				/>
				<Route
					exact
					path='/item/:id'
					element={<ItemDetail />}
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
