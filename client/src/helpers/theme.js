import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        text: {
            primary: "#424242",
            secondary: "#0097A7"
        },
        primary:{
            main:'#0277BD'
        },
        secondary: pink,
        error: red,
    },
    typography: {
        fontFamily:"'Gayathri', sans-serif",
        useNextVariants: true
    }
});

export default theme;
