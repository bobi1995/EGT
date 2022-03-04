import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";
const useStyles = makeStyles({
  tableStyle: {
    width: "100%",
    marginTop: 10,
  },
  actionColumn: {
    display: "flex",
    justifyContent: "center",
  },
  iconStyle: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const Table = ({ data, deleteBuilding, editBuilding }) => {
  const classes = useStyles();
  return (
    <table className={classes.tableStyle}>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Area</th>
          <th>Location</th>
          <th>Image</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data && data.length > 0
          ? data.map((el) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.area}</td>
                <td>{el.location}</td>
                <td>
                  <img src={el.image} style={{ height: 100 }} />
                </td>
                <td>
                  <div className={classes.actionColumn}>
                    <EditDialog editBuilding={editBuilding} building={el} />
                  </div>
                </td>
                <td>
                  <div className={classes.actionColumn}>
                    <DeleteDialog deleteBuilding={deleteBuilding} id={el.id} />
                  </div>
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
};

export default Table;
