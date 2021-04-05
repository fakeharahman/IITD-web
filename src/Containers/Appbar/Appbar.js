import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    IconButton,
    Box,
  } from "@material-ui/core";
  import React from "react";
  import DehazeIcon from '@material-ui/icons/Dehaze';
  import SearchIcon from '@material-ui/icons/Search';
  import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
  import Logo from '../../assets/logo.jpg'
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      position: "fixed",
      width: "100vw",
      color: "default",
    },
    linkItem: {
      padding: "3%",
      display: "flex",
      fontSize: 14
    },
    icon: {
    color: "#8075ED"
    },
    logo:{
      fontSize: 20,
      display: "flex",
      // width: "15%",
      justifyContent: "space-between",
      alignItems: "center",
      "& img":{
        height: 40,
        width: 40,
        paddingRight: 30
      }
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    appBar: {
      backgroundColor: "transparent",
      borderBottom: "0",
      boxShadow: "0 0 0 0",
      // height: 108
    },
   
   
  }));
  
  export default function Appbar(props) {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logo}>
              <img src={Logo} alt="logo" />
              MidasIIITD
            </Typography>
            <Box display="flex" alignItems="baseline">
                <span className={classes.linkItem}>Home <KeyboardArrowDownIcon /></span>
                <span className={classes.linkItem}>Pages <KeyboardArrowDownIcon /></span>
                <span className={classes.linkItem}>Sevices <KeyboardArrowDownIcon /></span>
                <span className={classes.linkItem}>Blog <KeyboardArrowDownIcon /></span>
                <span className={classes.linkItem}>Contacts </span>
            </Box>
            <Box></Box>
            <Box></Box>
            <Box>

           <IconButton>
               <DehazeIcon className={classes.icon} />
           </IconButton>
           <IconButton>
               <SearchIcon className={classes.icon} />
           </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    );
  }