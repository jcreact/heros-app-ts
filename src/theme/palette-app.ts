import { deepPurple, pink, indigo, amber, grey } from '@mui/material/colors';

import { PaletteModeType } from './ThemeApp';

const getPaletteSystem = (mode: PaletteModeType, prefersDarkMode: boolean) => ({
    palette: {
        mode: mode === 'auto' ? (prefersDarkMode ? 'dark' : 'light') : mode,
        ...(mode === 'light' || (mode === 'auto' && !prefersDarkMode)
            ? {
                  primary: indigo,
                  secondary: amber,
                  background: {
                      default: grey[200],
                  },
              }
            : {
                  primary: deepPurple,
                  secondary: pink,
              }),
    },
});

export default getPaletteSystem;
