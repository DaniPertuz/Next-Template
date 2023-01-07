import { GetStaticProps, GetStaticPaths, NextPage } from 'next';

import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';
import { initialData } from '../../database/products';
import { IProduct } from '../../interfaces';

interface Props {
    product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
    return (
        <ShopLayout title={''} pageDescription={''}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Box display='flex' flexDirection='column'>
                        <Card>
                            <CardMedia
                                component='img'
                                image={`/products/${product.images}`}
                            />
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box display='flex' flexDirection='column'>
                        <Typography variant='h1' component='h1'>{product.title}</Typography>
                        <Typography variant='h2' component='h2'>{product.price}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
    return {
        paths: initialData.products.map(product => ({
            params: { slug: product.slug }
        })),
        fallback: false
    };
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string; };
    const product = initialData.products.filter(p => p.slug === slug);

    return {
        props: {
            product: product[0]
        }
    };
};

export default ProductPage;