import { PaletteMode } from '@mui/material';
import { deepPurple, pink, indigo, amber, grey } from '@mui/material/colors';

const getPaletteSystem = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
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
