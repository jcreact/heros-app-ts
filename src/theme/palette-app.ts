import { PaletteMode } from '@mui/material';
import { deepPurple, pink, indigo, amber } from '@mui/material/colors';

const getPaletteSystem = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  primary: indigo,
                  secondary: amber,
              }
            : {
                  primary: deepPurple,
                  secondary: pink,
              }),
    },
});

export default getPaletteSystem;
