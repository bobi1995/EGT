import React, { useState, useEffect } from "react";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import address from "../global/address";
import Table from "./BuildingScreen/Table";
import axios from "axios";
import AddDialog from "./BuildingScreen/AddDialog";

const useStyles = makeStyles(() => ({
  topStyle: {
    top: 0,
    width: "100%",
    height: 50,
    background:
      "linear-gradient(to  bottom, rgba(0,128,0,0.9)	, rgba(0,128,0,0.5))",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 5,
  },
  nameStyle: {
    color: "#3F51B5",
    fontSize: 21,
  },
  tableContainer: {
    width: "50%",
    margin: "0 auto",
  },
  typoStyle: {
    fontSize: 25,
    marginLeft: 10,
    color: "white",
  },

  avatarStyle: { marginRight: 10, color: "white" },
}));

const BuildingsScreen = (props) => {
  const classes = useStyles();
  const [buildingData, setBuildingData] = useState([]);

  useEffect(() => {
    //as per task, delay 0.5 sec the first render of the list
    setTimeout(() => getBuilding(), 500);
  }, []);

  const getBuilding = () => {
    axios
      .get(address)
      .then((res) => setBuildingData(res.data))
      .catch((e) => console.log(e));
  };

  const deleteBuilding = (id) => {
    axios
      .delete(`${address}/${id}`)
      .then((res) => getBuilding())
      .catch((e) => console.log(e));
  };

  const createBuilding = (newBuilding) => {
    axios
      .post(`${address}`, newBuilding)
      .then((res) => getBuilding())
      .catch((e) => console.log(e));
  };

  const editBuilding = (newBuilding, id) => {
    console.log(newBuilding);
    axios
      .patch(`${address}/${id}`, newBuilding)
      .then((res) => getBuilding())
      .catch((e) => console.log(e));
  };
  return (
    <Box>
      <Box className={classes.topStyle}>
        <Typography className={classes.typoStyle}>Welcome</Typography>
        <AccountCircleIcon fontSize="large" className={classes.avatarStyle} />
      </Box>
      <Box style={{ margin: "5em auto", width: "80%", textAlign: "center" }}>
        <AddDialog createBuilding={createBuilding} />
        <Table
          data={buildingData}
          deleteBuilding={deleteBuilding}
          editBuilding={editBuilding}
        />
      </Box>
    </Box>
  );
};

export default BuildingsScreen;
