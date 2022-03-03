import { NavLink } from 'react-router-dom';
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
    Fade,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Hero, Publishers } from '../../interfaces/interfaces';

interface HeroCardProps {
    hero: Hero;
    actions?: JSX.Element | JSX.Element[];
    chip?: JSX.Element;
}

export const HeroItem = ({
    hero: { id, name, publisher, alterEgo, firstAppearance, characters },
    actions,
    chip,
}: HeroCardProps) => {
    const avatarAcronym = name
        .match(/\b(\w)/g)
        ?.join('')
        .toUpperCase();

    const isDC = () => publisher === Publishers.DC;

    const heroImage = `/assets/img/${id}.jpg`;

    return (
        <Fade in timeout={500}>
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
                    title={
                        <Typography variant="h5">
                            <span>{name}</span>
                            {chip && chip}
                        </Typography>
                    }
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
                    <Typography>
                        <b style={{ textTransform: 'capitalize' }}>Primera Aparición: </b>
                        {firstAppearance}
                    </Typography>
                    {alterEgo !== characters && (
                        <Typography
                            variant="caption"
                            color={({ palette }: Theme) => palette.grey[600]}
                        >
                            {characters}
                        </Typography>
                    )}
                </CardContent>
                <CardActions sx={{ marginX: 1, marginBottom: 1 }}>
                    {actions ? (
                        actions
                    ) : (
                        <Button
                            aria-label="learn more"
                            component={NavLink}
                            to={`/hero/${id}`}
                            color="info"
                        >
                            Ver más
                            <ChevronRightIcon />
                        </Button>
                    )}
                </CardActions>
            </Card>
        </Fade>
    );
};
