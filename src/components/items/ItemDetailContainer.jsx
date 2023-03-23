import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CircularProgress,
	Grid,
	Typography,
} from '@mui/material';
import { collection, getFirestore, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetailContainer = () => {
	const { id } = useParams();
	const [item, setItem] = useState(null);

	useEffect(() => {
		itemData(id);
	}, []);

	const itemData = async (id) => {
		const db = getFirestore();
		const items = collection(db, 'items');
		const itemsListFirebase = await getDocs(items);
		const item = itemsListFirebase.docs.find((element) => element.id == id);
		setItem({ ...item.data(), id });
	};

	return (
		<>
			{!item ? (
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
					direction='column'
					alignItems='center'
					justifyContent='center'
					sx={{ padding: 1 }}
				>
					<Grid item>
						<Card>
							<CardMedia
								sx={{ height: 220 }}
								image={item.urlImage}
								title={item.nameProduct}
								component='img'
							/>
							<CardContent>
								<Typography>
									Product: {item.nameProduct}
								</Typography>
								<Typography>
									Description: {item.description}
								</Typography>
							</CardContent>
							<CardActions>
								<ItemCount {...item} />
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default ItemDetailContainer;
