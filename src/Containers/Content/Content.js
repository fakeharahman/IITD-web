import { makeStyles } from "@material-ui/core";
import React from "react";
import LandPic from "../../assets/landPic1.jpg";
import Bubble from "../../Components/Bubble/Bubble";

const useStyles = makeStyles({
  img: {
    borderRadius: " 2% 10% 2% 10%",
    margin: "3% 15%"
  },
});
export default function Content(props) {
  const classes = useStyles();
  const toSignin=()=>{
    props.history.push("/signin");
  }
  const toYoutube=()=>{
    window.location.replace("https://www.youtube.com/user/PewDiePie")
  }
  return (
    <div>
      <img src={LandPic} alt="Landing" className={classes.img} />
      <Bubble toSignin={toSignin} toYoutube={toYoutube} />
    </div>
  );
}
