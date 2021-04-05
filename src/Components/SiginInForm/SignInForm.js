import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Box, Button, Divider, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  tabs: {
    width: "40%",
    backgroundColor: "#Eedce6",
    color: "#fff",
    // height: "50%"
  },
  signin: {
    padding: "5% 3%",
  },
  textField: {
    margin: "3% 8%",
    width: "80%",
  },
  btn: {
    margin: "3% 8%",
    width: "80%",
  },
  paper: {
    backgroundColor: "#Eedce6",
  },
  error: {
    margin: "3% 8%",
    color: "red",
  },
});

export default function SignInForm(props) {
  const classes = useStyles();

  return (
    <div className={classes.tabs}>
      <Paper square elevation={2} className={classes.paper}>
        <Tabs
          value={props.tabValue}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          onChange={props.onTabChange}
          //   aria-label="disabled tabs example"
        >
          <Tab label="Sign up" value="signup" />
          <Tab label="Login" value="login" />
        </Tabs>
        <Divider />
      </Paper>
      <Box className={classes.signin}>
        {props.error ? <p className={classes.error}>{props.error}</p> : null}
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          label="Email"
          name="email"
          onChange={props.onTextChange}
          value={props.userData.email}
          className={classes.textField}
        />
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          label="Password"
          name="password"
          onChange={props.onTextChange}
          value={props.userData.password}
          type="password"
          className={classes.textField}
        />
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={props.onSignIn}
        >
          {props.tabValue}
        </Button>
      </Box>
    </div>
  );
}
