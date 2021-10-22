import React from "react";
import { TableCell, TableHead, TableRow } from "@material-ui/core";

const CollapsibleTableHead = ({ columns }) => {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell />
          {columns.map((item) => (
            <TableCell key={item.id}>{item.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};

export default CollapsibleTableHead;
