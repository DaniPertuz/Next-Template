import NextLink from 'next/link';

import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <NextLink href='/' passHref>
                    <Link display='flex' alignItems='center'>
                        <Typography variant='h6'>Secretos de Isabella</Typography>
                    </Link>
                </NextLink>

                <Box flex={1} />

                <Box
                    sx={{}}
                >
                    <NextLink href='/products' passHref>
                        <Link>
                            <Button>Productos</Button>
                        </Link>
                    </NextLink>
                </Box>

                <Box flex={1} />

                <IconButton>
                    <SearchOutlined />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};
