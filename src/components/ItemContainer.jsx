import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const ItemContainer = () => {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex', width: 350 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        One Million
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Paco Rabanne
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAldDlxXI8sgzvTZQe9btXT9Z_IbkUyIOn4AfJSqAucHBxpN2i3uZSIKLqId7i5Q&usqp=CAc"
                alt="Img"
            />
        </Card>
    );
}

export default ItemContainer;