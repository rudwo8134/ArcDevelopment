import { createTheme } from "@material-ui/core/styles"

const arcBlue="#0b72b9"
const arcOrange = "#ffba60"
const arcGrey = "#868686"

export default createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: '700',
      fontSize: '1rem',
    },
    h2: {
      fontFamily: 'Raleway',
      fontSize: '2.5rem',
      fontWeight: '700',
      color: arcBlue,
      lineHeight: 1.5,
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    body1: {
      fontSize: '1.25rem',
      fontWeight: '300',
      color: arcGrey,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      fontWeight: '700',
      color: arcBlue,
    },
    h6: {
      fontFamily: 'Raleway',
      color: arcBlue,
      fontWeight: '500',
      lineHeight: 1
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: arcBlue,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: '300',
      color: arcGrey,
    },
    subtitle2: {
      fontSize: '1.25rem',
      fontWeight: '300',
      color: 'white',
    },
    learnbutton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
      color: arcGrey,
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: '1rem',
      },
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${arcBlue}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${arcBlue}`,
        },
      },
    },
  },
});