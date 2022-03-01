import { Hero, Publisher } from '../../interfaces/interfaces';
import { HeroCard } from './HeroCard';
import { Box, Stack, Theme, Typography } from '@mui/material';
import { getHerosByPublisher } from '../../helpers/heros.helper';

interface HeroListProps {
    publisher: Publisher;
    sort?: boolean;
}

export const HeroList = ({ publisher, sort = false }: HeroListProps) => {
    const heros = getHerosByPublisher(publisher);

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
            <Box
                mt={2}
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gridGap: '1rem',
                }}
            >
                {heros.sort(compareByName).map((hero) => (
                    <HeroCard key={hero.id} hero={hero} />
                ))}
            </Box>
        </>
    );
};
