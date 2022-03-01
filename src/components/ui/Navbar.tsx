import { NavLink, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Theme } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Brightness4Outlined, Brightness5Outlined } from '@mui/icons-material';

import { ColorModeContext } from '../../theme/ThemeApp';
import { useContext } from 'react';

const ButtonLink = (props: any) => {
    return (
        <Button
            size="medium"
            sx={{
                color: (theme: Theme) => theme.palette.grey[500],
                '&.active': {
                    color: 'inherit',
                },
            }}
            component={NavLink}
            {...props}
        />
    );
};

export const Navbar = () => {
    const theme = useTheme();
    const { toggleColorMode } = useContext(ColorModeContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        // TODO: Logout logic
        navigate('/login', { replace: true });
    };

    return (
        <AppBar enableColorOnDark position="fixed">
            <Toolbar>
                <Typography variant="h6">Asociaciones</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        flexGrow: 1,
                        gap: 1,
                    }}
                    ml={4}
                >
                    <ButtonLink to="/marvel">Marvel</ButtonLink>

                    <ButtonLink to="/dc">DC</ButtonLink>

                    <ButtonLink to="/search">Buscar</ButtonLink>
                </Box>

                <Typography variant="subtitle2" mr={1}>
                    José Palma
                </Typography>

                <IconButton onClick={toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? (
                        <Brightness5Outlined />
                    ) : (
                        <Brightness4Outlined />
                    )}
                </IconButton>

                <Button
                    color="error"
                    variant="contained"
                    sx={{
                        marginLeft: (theme: Theme) => theme.spacing(1),
                    }}
                    onClick={handleLogout}
                >
                    Salir
                </Button>
            </Toolbar>
        </AppBar>
    );
};
