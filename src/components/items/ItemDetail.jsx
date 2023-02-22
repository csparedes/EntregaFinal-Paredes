import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = () => {
	const { id } = useParams();
	const [item, setItem] = useState({});

	useEffect(() => {
		itemData(id);
	}, []);

	const itemData = async (id) => {
		const data = await fetch('/data/items.json');
		const obj = await data.json();
		const list = obj.items;
        const item = list.find((element)=>element.id == id);
        setItem(item);
	};

	return (
		<Grid container direction='column' alignItems='center' justifyContent='center' sx={{padding: 1}}>
            <Grid item>
                <Card>
                    <CardMedia
                        sx={{ height: 220 }}
                        image={item.urlImage}
                        title={item.nameProduct}
                        component='img'
                    />
                    <CardContent>
                        <Typography>Description: {item.description}</Typography>
                    </CardContent>
                    <CardActions>
                        <ItemCount />
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
	);
};

export default ItemDetail;
