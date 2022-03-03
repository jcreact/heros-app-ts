import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Button, Grid, Paper, TextField, Theme, Typography, Box } from '@mui/material';
import { grey } from '@mui/material/colors';

import { AuthContext } from '../../auth/authContext';
import { useForm } from '../../hooks/useForm';
import { ActionTypes } from '../../types/types';

interface LoginForm {
    name: string;
    password: string;
}

export const LoginScreen = () => {
    const {
        formValues: { name, password },
        handleChange,
    } = useForm<LoginForm>({
        name: 'jcpalma',
        password: '12345',
    });
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch({
            type: ActionTypes.LOGIN,
            payload: { name },
        });
        navigate('/marvel', { replace: true });
    };

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" height="100vh">
            <Paper
                elevation={3}
                sx={{
                    padding: (theme) => theme.spacing(2),
                    width: 300,
                    border: ({ palette }: Theme) =>
                        `1px solid ${grey[palette.mode === 'dark' ? 800 : 400]}`,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Typography variant="h4">Login</Typography>
                    <Box
                        component="form"
                        autoComplete="off"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'end',
                            gap: 2,
                        }}
                        width="100%"
                    >
                        <TextField
                            fullWidth
                            label="Usuario"
                            name="name"
                            onChange={handleChange}
                            value={name}
                            autoFocus
                        />
                        <TextField
                            type="password"
                            fullWidth
                            label="Contraseña"
                            name="password"
                            onChange={handleChange}
                            value={password}
                        />
                        <Button variant="contained" onClick={handleLogin}>
                            Ingresar
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};
