import { Button, Grid, Paper, TextField, Theme, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // TODO: Login logic
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
                        <TextField fullWidth label="Usuario" defaultValue="jcpalma" autoFocus />
                        <TextField
                            type="password"
                            fullWidth
                            label="Contraseña"
                            defaultValue="123456"
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
