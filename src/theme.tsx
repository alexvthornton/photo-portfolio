import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#F5F8F2',
            light: 'white'
        },
        secondary: {
            main: '#E6EBEB',
            light: '#fff',
            dark: '#000',
        },
        info: {
            main: '#222',
            light: '#79A5BD',
            dark: '#3C7898'
        },
        error: {
            main: '#FA3E3E',
        },
        warning: {
            main: '#F1E3D6'
        },
        success: {
            main: '#555555',
            light: '#7db29a'
        }
        // mode?: PaletteMode;
        // tonalOffset?: PaletteTonalOffset;
        // contrastThreshold?: number;
        // common?: Partial<CommonColors>;
        // grey?: ColorPartial;
        // text?: Partial<TypeText>;
        // divider?: string;
        // action?: Partial<TypeAction>;
        // background?: Partial<TypeBackground>;
    }
})