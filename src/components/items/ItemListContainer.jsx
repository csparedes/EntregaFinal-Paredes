import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

const ItemListContainer = () => {
	const [itemList, setItemList] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		extractedData(id);
	}, [id]);

	const extractedData = async (id) => {
		try {
			const data = await fetch('/data/items.json');
			const list = await data.json();
			setItemList(
				!id
					? list.items
					: list.items.filter((item) => item.idCategory === parseInt(id))
			);
		} catch (error) {
			console.log('Error');
			console.log(error);
		}
	};

	return (
		<Box sx={{ p: 1 }}>
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
		</Box>
	);
};

export default ItemListContainer;
