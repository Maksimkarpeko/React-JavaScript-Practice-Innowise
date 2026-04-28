import { useState } from "react"
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
import { RouterPath } from "@shared/constants";
import { useGetUsersQuery } from "./api/userApi"
import style from "./Developers.module.css"


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: '#111827'
  },
  [`&.${style.userName}`]: {
    color: '#2563eb',
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

export const DevelopersPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [limitPerPage, setRowsPerPage] = useState(5);
  const skip = page * limitPerPage;
  const {data,isLoading} = useGetUsersQuery({limit:limitPerPage,skip});

  if (isLoading) return <p>Loading...</p>
  
  const {users, total} = data;
  const handleDeveloperClick = (id) => {
    navigate(`/${RouterPath.developers}/${id}`)
  }
  const handleChangePage = (
    event,
    newPage
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  console.log(users);
  return(
    <>
      <div className={style.titleContainer}>
        <h1>List of developers</h1>
        <p>Detailed directory of engineering personnel and expertise</p>
      </div>
      <TableContainer component={Paper} sx={{ maxHeight: 'calc(100vh - 150px)' }}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">City and country</StyledTableCell>
            <StyledTableCell align="center">Location company</StyledTableCell>
            <StyledTableCell align="center">Specialization</StyledTableCell>
            <StyledTableCell align="center">University</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell 
                component="th" 
                scope="row" 
                className={style.userName} 
                onClick={()=>handleDeveloperClick(user.id)}
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
              rowsPerPage={limitPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    'aria-label': 'rows per page',
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