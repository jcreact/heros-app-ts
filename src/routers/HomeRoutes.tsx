import { Routes, Route } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';

import { Navbar } from '../components/ui/Navbar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const HomeRoutes = () => {
    return (
        <>
            <Box
                sx={{
                    height: '100vh',
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    gridTemplateRows: 'auto 1fr',
                    gridTemplateAreas: `'header header' 'sidebar main'`,
                }}
            >
                <Box sx={{ gridArea: 'header' }}>
                    <Navbar />
                </Box>

                <Box component="main" sx={{ gridArea: 'main' }}>
                    <Toolbar />
                    <Routes>
                        <Route path="marvel" element={<MarvelScreen />} />
                        <Route path="dc" element={<DcScreen />} />
                        <Route path="search" element={<SearchScreen />} />
                        <Route path="/" element={<MarvelScreen />} />
                    </Routes>
                </Box>
            </Box>
        </>
    );
};
