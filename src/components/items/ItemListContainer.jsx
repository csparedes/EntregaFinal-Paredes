import {
	Box,
	CircularProgress,
	Grid,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

import {
	getFirestore,
	collection,
	getDocs,
} from 'firebase/firestore';

const ItemListContainer = () => {
	const [itemList, setItemList] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		extractedData(id);
	}, [id]);

	const extractedData = async (id) => {
		try {
			const db = getFirestore();
			const items = collection(db, 'items');
			const itemsListFirebase = await getDocs(items);
			const listAux = [];
			itemsListFirebase.docs.map((items) => listAux.push({...items.data(), id: items.id}));
			setItemList(
				!id
					? listAux
					: listAux.filter((item) => item.idCategory === id)
			);
		} catch (error) {
			console.log('Error');
			console.log(error);
		}
	};

	return (
		<Box sx={{ p: 1 }}>
			{itemList.length === 0 ? (
				<Grid
					container
					direction='column'
					alignItems='center'
					justifyContent='center'
				>
					<Grid item>
						<CircularProgress />
					</Grid>
				</Grid>
			) : (
				<Grid
					container
					alignContent='center'
					justifyContent='center'
					spacing={2}
				>
					{itemList.map((item, index) => (
						<Item
							key={index}
							{...item}
						/>
					))}
				</Grid>
			)}
		</Box>
	);
};

export default ItemListContainer;
