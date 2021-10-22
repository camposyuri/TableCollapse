import React from "react";
import { TableBody } from "@material-ui/core";

import CollapsibleTableHead from "./TableCollapse/CollapsibleTableHead";
import CollapsibleTable from "./TableCollapse/CollapsibleTable";
import CollapsedRow from "./TableCollapse/CollapsedRow";

import "./styles.css";

export default function App() {
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

  const rows = [
    createData(1, "03", "CERVEJA"),
    createData(2, "04", "CIGARROS")
  ];

  // return (
  //   <>
  //     <CollapsibleTable>
  //       <CollapsibleTableHead columns={columnsHead} />
  //       <TableBody>
  //         {rows.map((row) => (
  //           <>
  //             <TableRow>
  //               <TableCell>
  //                 <IconButton
  //                   aria-label="expand row"
  //                   size="small"
  //                   onClick={() => setOpen(!open)}
  //                 >
  //                   {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
  //                 </IconButton>
  //               </TableCell>
  //               <TableCell component="th" scope="row">
  //                 {row.segmentos}
  //               </TableCell>
  //               <TableCell>{row.descricao}</TableCell>
  //             </TableRow>
  //             <TableRow>
  //               <TableCell
  //                 style={{ paddingBottom: 0, paddingTop: 0 }}
  //                 colSpan={6}
  //               >
  //                 <Collapse in={open} timeout="auto" unmountOnExit>
  //                   <Box margin={1}>
  //                     <Table size="small" aria-label="purchases">
  //                       <CollapsibleTableHead columns={columnsHeadCollapse} />
  //                       <TableBody>
  //                         {row.history.map((historyRow) => (
  //                           <TableRow key={historyRow.codCest}>
  //                             <TableCell />
  //                             <TableCell component="th" scope="row">
  //                               {historyRow.codCest}
  //                             </TableCell>
  //                             <TableCell>{historyRow.descricao}</TableCell>
  //                             <TableCell>
  //                               <Box>
  //                                 <button
  //                                   color="primary"
  //                                   onClick={() => {
  //                                     console.log("/cestForm/" + row.id);
  //                                   }}
  //                                 >
  //                                   <EditOutlined fontSize="small" />
  //                                 </button>
  //                               </Box>
  //                             </TableCell>
  //                           </TableRow>
  //                         ))}
  //                       </TableBody>
  //                     </Table>
  //                   </Box>
  //                 </Collapse>
  //               </TableCell>
  //             </TableRow>
  //           </>
  //         ))}
  //       </TableBody>
  //     </CollapsibleTable>
  //   </>
  // );

  return (
    <>
      <CollapsibleTable>
        <CollapsibleTableHead columns={columnsHead} />
        <TableBody>
          {rows.map((row) => (
            <CollapsedRow key={row.id} row={row} />
          ))}
        </TableBody>
      </CollapsibleTable>
    </>
  );
}
