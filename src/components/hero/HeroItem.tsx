import {
    Avatar,
    Button,
    Card,
    Box,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Theme,
    Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Hero, Publishers } from '../../interfaces/interfaces';

interface HeroCardProps {
    hero: Hero;
}

export const HeroItem = ({
    hero: { id, name, publisher, alterEgo, firstAppearance, characters },
}: HeroCardProps) => {
    const avatarAcronym = name
        .match(/\b(\w)/g)
        ?.join('')
        .toUpperCase();

    const isDC = () => publisher === Publishers.DC;

    const heroImage = `/assets/img/${id}.jpg`;

    return (
        <Card
            sx={{
                border: ({ palette }: Theme) =>
                    `1px solid ${palette.grey[palette.mode === 'dark' ? 800 : 400]}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
            }}
        >
            <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            backgroundColor: (theme: Theme) =>
                                isDC() ? theme.palette.warning.light : theme.palette.error.dark,
                        }}
                    >
                        {avatarAcronym}
                    </Avatar>
                }
                title={name}
                subheader={alterEgo}
            />

            <Box marginX={2}>
                <CardMedia
                    image={heroImage}
                    component="img"
                    alt={id}
                    sx={{
                        borderRadius: '4px',
                    }}
                />
            </Box>

            <CardContent sx={{ flexGrow: 1 }}>
                <Typography>{firstAppearance}</Typography>
                {alterEgo !== characters && (
                    <Typography variant="caption" color={({ palette }: Theme) => palette.grey[600]}>
                        {characters}
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                <Button
                    aria-label="learn more"
                    component={NavLink}
                    to={`/hero/${id}`}
                    color="info"
                    //variant="contained"
                >
                    Ver más...
                </Button>
            </CardActions>
        </Card>
    );
};
