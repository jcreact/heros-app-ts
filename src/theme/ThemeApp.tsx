import { useState, useMemo, createContext } from 'react';
import {
    createTheme,
    responsiveFontSizes,
    CssBaseline,
    PaletteMode,
    useMediaQuery,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import getPaletteSystem from './palette-app';

interface AppThemeProps {
    children: JSX.Element | JSX.Element[];
}

export type PaletteModeType = PaletteMode | 'auto';

export const ColorModeContext = createContext({
    mode: 'auto' as PaletteModeType,
    toggleColorMode: () => {},
});

export default function AppTheme({ children }: AppThemeProps) {
    const [mode, setMode] = useState<PaletteModeType>('auto');
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const colorMode = useMemo(
        () => () => {
            setMode((prevMode: PaletteModeType) =>
                prevMode === 'auto' ? 'dark' : prevMode === 'dark' ? 'light' : 'auto'
            );
        },
        []
    );

    const theme = useMemo(
        () => responsiveFontSizes(createTheme(getPaletteSystem(mode, prefersDarkMode))),
        [mode, prefersDarkMode]
    );

    return (
        <ColorModeContext.Provider value={{ mode, toggleColorMode: colorMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
