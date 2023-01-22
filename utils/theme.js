import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { amber, blue, grey } from '@mui/material/colors';

let theme = createTheme({
    palette: {
        primary: { main: grey[400] },
        secondary: {
            main: amber[700]
        },
        error: {
            main: blue[100]
        }
    },
    breakpoints: {
        values: {
            // xs: 0,
            // sm: 600,
            // md: 900,
            // lg: 1200,
            // xl: 1536,
            mobile: 925,
            tablet: 1280,
            desktopHD: 1336
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;
