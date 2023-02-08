import { Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';

const ItemListContainer = ({ children }) => {
	return <Box sx={{ p: 1 }}>
        <Grid2 container alignContent='center' justifyContent='center'>
            {children}
        </Grid2>
    </Box>;
};

export default ItemListContainer;
