import { createContext, useState } from 'react';

export const CartContext = createContext(null);

const ShopingCartProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);

	const addProductToCart = (product) => {
		const isFinding = cartList.find((item) => item.id === product.id);
		if (!!isFinding) {
			return {
				ok: false,
				msg: 'El producto ya existe en su carrito de compras',
			};
		}

		setCartList([...cartList, product]);

		return {
			ok: true,
			msg: 'El producto fue agregado al carrito de compras',
		};
	};

	const moreProductToCart = (id) => {
		const isFinding = cartList.find((item) => item.id === id);
		const newItem = { ...isFinding, quantity: isFinding.quantity + 1 };
		const newCartList = cartList.map((item)=>{
			if(item.id===id){
				return newItem;
			}
			return item
		})
		
		if (!isFinding) {
			return {
				ok: false,
				msg: 'El producto no existe en su carrito de compras',
			};
		}
		setCartList(newCartList);
		return {
			ok: true,
			msg: 'Genial, ahora llevas otra unidad',
		};
	};
	const lessProductToCart = (id) => {
		const isFinding = cartList.find((item) => item.id === id);
		const newItem = { ...isFinding, quantity: isFinding.quantity - 1 };
		if (isFinding.quantity <= 1){
			setCartList(cartList.filter((item) => item.id !== id));
			return {
				ok: true,
				msg: 'El producto se ha removido del carrito de compras',
			};
		}
		const newCartList = cartList.map((item) => {
			if (item.id === id) {
				return newItem;
			}
			return item
		})

		if (!isFinding) {
			return {
				ok: false,
				msg: 'El producto no existe en su carrito de compras',
			};
		}
		setCartList(newCartList);
		return {
			ok: true,
			msg: 'Tranqui, una menos no pasa nada',
		};
	};

	const removeProductFromCart = (id) => {
		const isFinding = cartList.find((item) => item.id === id);

		if (!isFinding) {
			return {
				ok: false,
				msg: 'El producto no existe en el carrito de compras',
			};
		}

		setCartList(cartList.filter((item) => item.id !== id));

		return {
			ok: true,
			msg: 'Se ha removido el item del carrito de compras',
		};
	};

	const cleanCart = () => {
		setCartList([]);
		console.log(cartList);
		return {
			ok: true,
			msg: 'Se ha limpiado el carrito de compras',
		};
	};

	return (
		<CartContext.Provider
			value={[
				cartList,
				setCartList,
				addProductToCart,
				removeProductFromCart,
				lessProductToCart,
				cleanCart,
				moreProductToCart,
			]}
		>
			{children}
		</CartContext.Provider>
	);
};

export default ShopingCartProvider;
