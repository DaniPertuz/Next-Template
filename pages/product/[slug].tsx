import { FC } from 'react';

import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';
import { initialData } from '../../database/products';
import { useRouter } from 'next/router';


const ProductPage: FC = () => {
    const router = useRouter();
    const { slug } = router.query;
    const product = initialData.products.filter(p => p.slug === slug);
    return (
        <ShopLayout title={''} pageDescription={''}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Box display='flex' flexDirection='column'>
                        <Card>
                            <CardMedia
                                component='img'
                                image={`/products/${product[0].images}`}
                            />
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box display='flex' flexDirection='column'>
                        <Typography variant='h1' component='h1'>{product[0].title}</Typography>
                        <Typography variant='h2' component='h2'>{product[0].price}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default ProductPage;