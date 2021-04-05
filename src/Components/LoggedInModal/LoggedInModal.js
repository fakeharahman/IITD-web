import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: "1%",
    "& p":{
        maxWidth: "30rem"
    },
    "& img": {
        width: "100%"
    }
  },
  btn:{
    
  }

}));

export default function LoggedInModal(props) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        className={classes.modal}
        open={props.modalOpen}
        // onClose={props.onModalToggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.modalOpen}>
          <div className={classes.paper}>
            <h2>You have successfully logged in!</h2>
            <img src="https://media1.giphy.com/media/3otPoS81loriI9sO8o/200.gif" alt="You did it!" />
            <p>Your unique userId: {props.authData.userId}</p>

            <Button variant="contained" fullWidth color="primary" onClick={props.onModalToggle}>Log out</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
