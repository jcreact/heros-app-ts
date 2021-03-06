import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Theme } from '@mui/material';
import {
    Brightness4Outlined,
    Brightness5Outlined,
    BrightnessAutoOutlined,
} from '@mui/icons-material';

import { ColorModeContext } from '../../theme/ThemeApp';
import { AuthContext } from '../../auth/authContext';
import { ActionTypes } from '../../types/types';

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
    const { toggleColorMode, mode } = useContext(ColorModeContext);
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: ActionTypes.LOGOUT });
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
                    {user?.name}
                </Typography>

                <IconButton onClick={toggleColorMode} color="inherit">
                    {mode === 'auto' ? (
                        <BrightnessAutoOutlined />
                    ) : mode === 'dark' ? (
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
