import { useCallback, useState } from "react"
import { useNavigate } from "react-router";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableFooter, TablePagination, TablePaginationActions } from "@mui/material";
import { useGetUsersQuery } from "@modules/users/api/userApi"
import { RouterPath } from "@shared/constants";
import { Spinner } from "@shared/ui";
import style from "./UsersPage.module.css"
import { userTableTitle } from "./constants/user-table-title";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.common.black
  },
  [`&.${style.userName}`]: {
    color: "var(--user-blue-name)",
    fontWeight: 600,
    cursor: 'pointer',
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const UsersPage = () => {
  const navigate = useNavigate();
  const [ page, setPage ] = useState(0);
  const [ rowsPerPage, setRowsPerPage ] = useState(5);
  const skip = page * rowsPerPage;
  const { data, isLoading } = useGetUsersQuery({ limit: rowsPerPage, skip });

  const handleDeveloperClick = useCallback((id) => {
    navigate(`/${RouterPath.users}/${id}`)
  },[ navigate ])

  if (isLoading) return <Spinner/>

  const { users, total } = data;
  const handleChangePage = (_, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return(
    <>
      <div className={style.titleContainer}>
        <h1>List of users</h1>
        <p>Detailed directory of engineering personnel and expertise</p>
      </div>
      <TableContainer component={Paper} sx={{ maxHeight: 'calc(100vh - 150px)' }}>
        <Table sx={{ minWidth: 600 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {userTableTitle.map((item) => (
                <>
                  <StyledTableCell align="center" key={item}>{item}</StyledTableCell>
                </>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell 
                  component="th" 
                  scope="row" 
                  className={style.userName} 
                  onClick={()=> handleDeveloperClick(user.id)}
                >
                  {`${user.firstName} ${user.lastName}`}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {`${user.address.city} ${user.address.country}`}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {`${user.company.address.city} ${user.company.address.country}`}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {user.company.title}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {user.university}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, { label: 'All', value: -1 }]}
                colSpan={5}
                count={total}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      'aria-label': 'rows per page'
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  )
}