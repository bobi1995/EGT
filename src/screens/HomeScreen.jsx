import React, { useState, useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
const housepng = require("../images/homehouse.png"); // with require

const useStyles = makeStyles(() => ({
  containerStyle: {},
  linkStyle: {
    marginTop: 30,
    textDecoration: "none",
    padding: 15,
    color: "rgb(0,128,0)",
    fontSize: 25,
    display: "flex",
    fontWeight: "bold",
    justifyContent: "center",
    "&:hover": {
      textDecoration: "none",
      color: "rgb(0,128,0,0.2)",
    },
  },

  typographyStyle: {
    width: "50%",
    margin: "0 auto",
  },
}));

const HomeScreen = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Link to="/buildings" className={classes.linkStyle}>
        Building
      </Link>
      <Box style={{ textAlign: "center" }}>
        <img src={housepng} alt="House picture" />
      </Box>
      <Typography className={classes.typographyStyle}>
        Our professional consultants combine international best practices in the
        area of luxury estates with excellent knowledge of and expertise in the
        local market. Count on them seven days a week for a meaningful,
        intelligent and discrete advice. We, at Building Estates, are fully
        aware that your home is a mirror of your personality, endeavours and
        values. Our mission is to put in your hands the keys of the luxury
        property you have been dreaming of!
      </Typography>
    </Box>
  );
};

export default HomeScreen;
