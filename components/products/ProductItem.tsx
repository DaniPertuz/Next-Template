import { FC } from 'react';
import NextLink from 'next/link';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import { IProduct } from '../../interfaces';

interface Props {
    product: IProduct;
}

export const ProductItem: FC<Props> = ({ product }) => {
    console.log(product);
    
    return (
        <Grid item xs={6} sm={3} key={product.slug}>
            <Card>
                <NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
                    <Link>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                image={`products/${product.images[0]}`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2">
                                    ${product.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </NextLink>
            </Card>
        </Grid>
    );
};
