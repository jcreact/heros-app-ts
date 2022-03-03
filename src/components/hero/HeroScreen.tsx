import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { getHeroById } from '../../helpers/heros.helper';
import { HeroItem } from './HeroItem';
import { useMemo } from 'react';

export const HeroScreen = () => {
    const { id = '' } = useParams();

    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(id), [id]);

    if (!hero) {
        return <Navigate to="/marvel" />;
    }

    const handleBack = () => navigate(-1);

    const backAction = (
        <Button aria-label="go back" color="warning" variant="outlined" onClick={handleBack}>
            <ChevronLeftIcon /> Regresar
        </Button>
    );

    const chipPublisher = (
        <Chip
            size="small"
            label={hero.publisher}
            color="info"
            sx={{
                marginLeft: 1,
            }}
        />
    );

    return (
        <Grid
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1/2fr))',
                gridGap: '1rem',
                justifyContent: 'center',
            }}
        >
            <Box>
                <Typography variant="h4">
                    {hero.name} ({hero.alterEgo})
                </Typography>
                <hr />
                <Box mt={2}>
                    <HeroItem hero={hero} actions={backAction} chip={chipPublisher} />
                </Box>
            </Box>
        </Grid>
    );
};
