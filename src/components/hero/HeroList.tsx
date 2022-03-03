import { Hero, Publisher } from '../../interfaces/interfaces';
import { HeroItem } from './HeroItem';
import { Box, Stack, Theme, Typography, Fade } from '@mui/material';
import { getHerosByPublisher } from '../../helpers/heros.helper';
import { useMemo } from 'react';

interface HeroListProps {
    publisher: Publisher;
    sort?: boolean;
}

export const HeroList = ({ publisher, sort = false }: HeroListProps) => {
    const heros = useMemo(() => getHerosByPublisher(publisher), [publisher]);

    const compareByName = (a: Hero, b: Hero) => (sort ? a.name.localeCompare(b.name) : 1);

    return (
        <>
            <Stack direction="row" justifyContent="space-between" alignItems="end">
                <Typography variant="h4">{publisher}</Typography>
                <Typography variant="caption" color={({ palette }: Theme) => palette.grey[600]}>
                    {heros.length} héroes.
                </Typography>
            </Stack>
            <hr />
            <Fade in timeout={100}>
                <Box
                    mt={2}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gridGap: '1rem',
                    }}
                >
                    {heros.sort(compareByName).map((hero) => (
                        <HeroItem key={hero.id} hero={hero} />
                    ))}
                </Box>
            </Fade>
        </>
    );
};
