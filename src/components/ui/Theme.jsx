import { createTheme } from "@material-ui/core/styles"

const arcBlue="#0b72b9"
const arcOrange = "#ffba60"


export default createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
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
      color: `${arcBlue}`,
      lineHeight: 1.5
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
  },
});