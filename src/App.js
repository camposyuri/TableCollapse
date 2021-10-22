import React, { useState } from "react";
import {
  TableBody,
  TableFooter,
  TablePagination,
  TableRow
} from "@material-ui/core";

import CollapsibleTableHead from "./TableCollapse/CollapsibleTableHead";
import CollapsibleTable from "./TableCollapse/CollapsibleTable";
import CollapsedRow from "./TableCollapse/CollapsedRow";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";

import "./styles.css";

export default function App() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const columnsHead = [
    { id: 1, label: "Segmentos" },
    { id: 2, label: "Descrição" }
  ];

  function createData(id, segmentos, descricao) {
    return {
      id,
      segmentos,
      descricao,
      history: [
        { codCest: "02.524.641", descricao: "Teste 1" },
        { codCest: "08.215.654", descricao: "Teste 2" }
      ]
    };
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const rows = [
    createData(1, "03", "CERVEJA"),
    createData(2, "04", "CIGARROS"),
    createData(3, "05", "REFRIGERANTES"),
    createData(4, "06", "DERIVADOS"),
    createData(5, "07", "PERFUMARIA"),
    createData(6, "08", "TECIDOS"),
    createData(7, "09", "PADARIA")
  ];

  return (
    <>
      <CollapsibleTable>
        <CollapsibleTableHead columns={columnsHead} />
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <CollapsedRow key={row.id} row={row} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </CollapsibleTable>
    </>
  );
}
