import { NextPage } from 'next';

import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts';

import { initialData } from '../database/products';
import { ProductsList } from '../components/products';

const HomePage: NextPage = () => {
  return (
    <>
      <ShopLayout title={'Secretos de Isabella'} pageDescription={'Insumos de bisutería'}>
        <Typography variant='h1' component='h1'>Tienda</Typography>
        <Typography variant='h2' component='h2' marginBottom={3}>Todos los productos</Typography>

        <ProductsList products={initialData.products} />
      </ShopLayout>
    </>
  );
};

export default HomePage;