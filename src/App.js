import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  Box,
} from "@material-ui/core";
import { Route, Switch } from "react-router";
import Appbar from "./Containers/Appbar/Appbar";
import Content from "./Containers/Content/Content";
import SignIn from "./Containers/SignIn/SignIn";

const useStyles = makeStyles((theme) => ({
  landing: {
    background:
      "radial-gradient(at 60% top , #4C324D 2%, #071925 40%, #071925 58%)",
    minHeight: "100vh",
    color: "white",
  },
  content: {
    paddingTop: 64,
  },
}));

function App() {
  const classes = useStyles();
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: "#071925",
      },
      secondary: {
        main: "#fff",
      },
      error: {
        main: "#CE3232",
      },
      props: {
        MuiButtonBase: {
          disableRipple: true,
        },
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Appbar />
        <Box className={classes.landing}>
          <Box className={classes.content}>
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route path="/" component={Content} />
            </Switch>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
