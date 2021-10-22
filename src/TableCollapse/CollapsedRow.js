import React, { useState } from "react";

import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@material-ui/core";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  EditOutlined
} from "@material-ui/icons";
import CollapsibleTableHead from "./CollapsibleTableHead";

const CollapsedRow = ({ row }) => {
  const [open, setOpen] = useState(false);

  const columnsHeadCollapse = [
    { id: 5, label: "Código" },
    { id: 9, label: "Descrição" },
    { id: 8, label: "Ações" }
  ];

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.segmentos}
        </TableCell>
        <TableCell>{row.descricao}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <CollapsibleTableHead columns={columnsHeadCollapse} />
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.codCest}>
                      <TableCell />
                      <TableCell component="th" scope="row">
                        {historyRow.codCest}
                      </TableCell>
                      <TableCell>{historyRow.descricao}</TableCell>
                      <TableCell>
                        <Box>
                          <button
                            color="primary"
                            onClick={() => {
                              console.log("/cestForm/" + historyRow.codCest);
                            }}
                          >
                            <EditOutlined fontSize="small" />
                          </button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CollapsedRow;
