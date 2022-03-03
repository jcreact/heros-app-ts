import { useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Fade,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Theme,
    Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroItem } from '../hero/HeroItem';
import { getHerosByName } from '../../helpers/heros.helper';

interface SearchForm {
    searchText: string;
}

export const SearchScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const query = queryString.parse(location.search);
    const q =
        query.q === null || !query.q
            ? localStorage.getItem('searchText') || ''
            : (query.q as string);

    const {
        formValues: { searchText },
        handleChange,
        clear,
    } = useForm<SearchForm>({
        searchText: q,
    });

    useEffect(() => {
        q && navigate(`?q=${q}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const heros = useMemo(() => getHerosByName(q), [q]);

    const clearSearch = () => {
        clear('searchText');
        localStorage.setItem('searchText', '');
        navigate('');
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`?q=${searchText}`);
    };

    useEffect(() => {
        localStorage.setItem('searchText', q);
    }, [q]);

    return (
        <>
            <Grid container spacing={2} mb={2}>
                <Grid component="form" item xs={12} md={6} lg={4} onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Nombre de héroe..."
                        name="searchText"
                        autoComplete="off"
                        value={searchText}
                        onChange={handleChange}
                        onKeyUp={(e) => {
                            e.code === 'Escape' && clearSearch();
                        }}
                        autoFocus
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />{' '}
                                </InputAdornment>
                            ),
                            endAdornment: searchText && (
                                <InputAdornment position="end">
                                    <IconButton size="small" onClick={(_) => clearSearch()}>
                                        <CancelRoundedIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                {q && (
                    <Grid item xs={12} md={6} lg={4} alignSelf="end">
                        <Typography
                            variant="subtitle1"
                            color={({ palette }: Theme) => palette.grey[600]}
                        >
                            {heros.length} héroes encontrados.
                        </Typography>
                    </Grid>
                )}
            </Grid>
            <hr />

            {heros.length > 0 && (
                <Fade in timeout={300}>
                    <Grid container alignItems="stretch" spacing={2} mt={1}>
                        {heros.map((hero) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={hero.id} height="inherit">
                                <HeroItem key={hero.id} hero={hero} />
                            </Grid>
                        ))}
                    </Grid>
                </Fade>
            )}

            {q && heros?.length === 0 && (
                <Typography variant="body1" sx={{ mt: 2 }}>
                    No se encontraron héroes con el nombre '<strong>{q}</strong>'
                </Typography>
            )}
        </>
    );
};
