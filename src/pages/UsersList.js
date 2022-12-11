import React, { useEffect, useState } from "react";
import { getUsers } from "../services/UsersService";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
import SwitchButton from "../components/SwitchButton";

const theme = createTheme();

const columns = [
  { id: "first_name", label: "First Name", minWidth: 170 },
  { id: "last_name", label: "Last Name", minWidth: 100 },
  {
    id: "created_at",
    label: "Created At",
    minWidth: 170,
  },
];

export default function UserList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
/*
  const handleChangeSwitch = (event) => {
    setChecked(event.target.checked);
  };
*/
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: "83vh" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell
                // key={column.id}
                //align={column.align}
                // style={{ minWidth: column.minWidth }}
                >
                  {"Edit User"}
                </TableCell>
                <TableCell
                // key={column.id}
                //align={column.align}
                // style={{ minWidth: column.minWidth }}
                >
                  {"Lock/Activate"}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((users) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={users.id}
                    >
                      {columns.map((column) => {
                        const value = users[column.id];
                        if (users.status === "active") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        } else if (users.status === "locked") {
                          return (
                            <TableCell
                              style={{ textDecoration: "line-through" }}
                              key={column.id}
                              align={column.align}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        }
                        return 0;
                      })}
                      <TableCell>
                        <Button
                          href={`/edit/${users.id}`}
                          variant="contained"
                          endIcon={<MiscellaneousServicesIcon />}
                        >
                          Edit User
                        </Button>
                      </TableCell>
                      <TableCell>
                        <SwitchButton
                          status={users.status}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </ThemeProvider>
  );
}
