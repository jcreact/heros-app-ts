import { Routes, Route } from 'react-router-dom';
import { Box, Theme, Toolbar } from '@mui/material';

import { Navbar } from '../components/ui/Navbar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from '../components/hero/HeroScreen';

export const HomeRoutes = () => {
    return (
        <>
            <Box
                sx={{
                    height: '100vh',
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    gridTemplateRows: 'auto 1fr auto',
                    gridTemplateAreas: `'header header' 'sidebar main' 'footer footer'`,
                }}
            >
                <Box sx={{ gridArea: 'header' }}>
                    <Navbar />
                </Box>

                <Box component="main" sx={{ gridArea: 'main' }} m={2}>
                    <Toolbar />
                    <Routes>
                        <Route path="marvel" element={<MarvelScreen />} />
                        <Route path="dc" element={<DcScreen />} />
                        <Route path="search" element={<SearchScreen />} />
                        <Route path="hero/:id" element={<HeroScreen />} />

                        <Route path="/" element={<MarvelScreen />} />
                    </Routes>
                </Box>

                <Box sx={{ gridArea: 'footer' }} height={(theme: Theme) => theme.spacing(1)} />
            </Box>
        </>
    );
};
