import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#F5F8F2',
            light: 'white'
        },
        secondary: {
            main: '#E6EBEB',
            light: '#F5FAFA',
            dark: '#CDD1D1',
        },
        info: {
            main: '#677C87',
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
            main: '#668E7C',
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