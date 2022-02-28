import { useState, useMemo, createContext } from 'react';
import { createTheme, responsiveFontSizes, CssBaseline, PaletteMode } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import getPaletteSystem from './palette-app';

interface AppThemeProps {
    children: JSX.Element | JSX.Element[];
}

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function AppTheme({ children }: AppThemeProps) {
    const [mode, setMode] = useState<PaletteMode>('dark');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        []
    );

    const theme = useMemo(() => responsiveFontSizes(createTheme(getPaletteSystem(mode))), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
