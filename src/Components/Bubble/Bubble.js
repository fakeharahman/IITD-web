import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import BubbleImg from "../../assets/bubble1.png";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";

const useStyles = makeStyles({
  bubble: {
    backgroundColor: "pink",
    height: "60%",
    width: "40%",
    position: "absolute",
    top: 0,
    borderRadius: "50% 50% 70% 10%",
    "&::before": {
      // bottom: 0,
      // left: 0,
      // boxShadow: "-50px 50px 0 0 red",
      // content: '""',
      // display: "block",
      // width: "200%",
      // height: "200%",
      // position: "absolute",
      // borderRadius: "50%"
    },
  },
  bubbleImg: {
    opacity: "70%",
    position: "absolute",
    top: "10%",
    width: "40%",
    height: "75%",
    left: "calc( 15% + 450px )",
  },
  bubbleContent: {
    height: "75%",
    width: "40%",
    left: "calc( 15% + 450px )",
    top: "17%",
    fontFamily: "'Poppins', sans-serif",
    position: "absolute",
    paddingLeft: "10%",
    boxSizing: "border-box",
    "& h3": {
      fontSize: 70,
      margin: "0.5em 0",
      lineHeight: "70px",
    },
    "& p": {
      paddingRight: "5%",
    },
  },
  btn: {
    padding: " 0 3%",
    fontSize: 12,
    margin: "0 2%",
  },
});

export default function Bubble(props) {
  const classes = useStyles();
  return (
    <div>
      <div>
        <img src={BubbleImg} alt="bubble" className={classes.bubbleImg} />
        <div className={classes.bubbleContent}>
          <h3>
            Web App
            <br /> Task
          </h3>
          <p>
            Lorem Ipsum is simple the dummy text of the printning and
            typesetting industry
          </p>
          <br />
          <Box display="flex">
            <Button
              variant="outlined"
              color="secondary"
              className={classes.btn}
              onClick={props.toSignin}
            >
              Login | Signup
            </Button>
            <Button
              color="secondary"
              className={classes.btn}
              onClick={props.toYoutube}
            >
              <PlayCircleFilledWhiteIcon style={{ fontSize: "50px" }} />
              Go to youtube
            </Button>
          </Box>
        </div>
      </div>
      {/* <div className={classes.bubble}> */}

      {/* </div> */}
    </div>
  );
}
