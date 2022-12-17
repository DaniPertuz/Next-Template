import { Grid } from '@mui/material';
import { FC } from 'react';
import { IProduct } from '../../interfaces';
import { ProductItem } from '.';

interface Props {
    products: IProduct[];
}

export const ProductsList: FC<Props> = ({ products }) => {
    return (
        <Grid container spacing={6}>
            {
                products.map(product => (
                    <ProductItem
                        key={product.slug}
                        product={product}
                    />
                ))
            }
        </Grid>
    );
};