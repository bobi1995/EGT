import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    position: "fixed",
    bottom: 0,
    background:
      "linear-gradient(to  top, rgba(0,128,0,0.9)	, rgba(0,128,0,0.2))",
    color: "white",
    width: "100%",
    padding: 15,
  },
  linkStyle: {
    textDecoration: "none",
    padding: 15,
    color: "white",
    fontSize: 17,
    "&:hover": {
      textDecoration: "none",
      color: "black",
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.container}>
      <Link to="/" className={classes.linkStyle}>
        Home
      </Link>
      <Link to="/buildings" className={classes.linkStyle}>
        Buildings
      </Link>
    </footer>
  );
};
export default Footer;
