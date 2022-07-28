import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import TablePagination from '@mui/material/TablePagination';
import { makeStyles } from '@mui/styles';
import { Checkbox, Typography, skeleton } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';


const useStyles = makeStyles({
  tableContainer: {
    borderRadius: 15,
    // margin: '10px 10px',
    // maxWidth: 950
  },
  table: {
    // minWidth: 650,
  },
  tableHead: {
    backgroundColor: '#4843e6',
    color: '#fff',
  },
  tableRow: {
    backgroundColor: '#eb9d9d',
    // marginBottom: 15,
  },
  label: {
    color: '#fff',
    borderRadius: 15,
    fontSize: 14,
    width: 55,
    padding: '4px 9px',
  },
  link: {
    color: '#1e1a5c',
    textTransform: 'capitalize'
  }
})

function ListIssues() {
    const [issues, setIssues] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const classes = useStyles();

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    useEffect(() => {
        axios.get('https://butrackerapi.herokuapp.com/issue').then((res) => setIssues(res.data))
    }, [])
  return <div>
      {/* <ul>
        {issues.map(issue => (
          <li key={issue._id}>{issue.title}</li>
        ))}
      </ul> */}

      <Box sx={{display: 'flex', justifyContent: 'end', marginBottom: 1}} >
        {/* <Button variant="contained" endIcon={<AddIcon />}>Add</Button> */}
        <IconButton href="/issue/create" color="primary" sx={{borderRadius: 15, background: 'orange'}}>
          <AddIcon />
        </IconButton>
      </Box>
      <Typography variant="h3" component="h1" align="center" color="primary" marginBottom={2}>Issues</Typography>

      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead}>Select</TableCell>
              <TableCell className={classes.tableHead}>Title</TableCell>
              <TableCell className={classes.tableHead}>Priority</TableCell>
              <TableCell className={classes.tableHead}>Label</TableCell>
              <TableCell className={classes.tableHead}>Status</TableCell>
              <TableCell className={classes.tableHead}>Assignee</TableCell>
              <TableCell className={classes.tableHead}>Edit</TableCell>
              <TableCell className={classes.tableHead}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {issues
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((issue) => (
              <TableRow key={issue._id} className={classes.tableRow}>
                <Checkbox />
                <TableCell>
                  <Typography variant="body2" component="h3">
                    {/* <a href={issue._id}>{issue.title}</a> */}
                    <Link href={issue._id} underline="hover" className={classes.link}>{issue.title}</Link>
                    {/* {issue.title} */}
                  </Typography>
                </TableCell>
                <TableCell> 
                  <Typography
                    className={classes.label}
                    style={{ 
                      backgroundColor:
                      (( issue.priority == 'high' && 'red' ) ||
                      (  issue.priority == 'medium' && 'orange' ) ||
                      (  issue.priority == 'low' && 'green' )
                    )}}
                    align="center"
                  >
                  {issue.priority}
                  </Typography>
                </TableCell>
                <TableCell> 
                  <Typography
                    className={classes.label}
                    style={{ 
                      backgroundColor:
                      (( issue.label == 'bug' && 'red' ) ||
                      (  issue.label == 'feature' && 'blue' ) ||
                      (  issue.label == 'step' && 'purple' )
                    )}}
                    align="center"
                  >
                    {issue.label}
                  </Typography>
                </TableCell>
                <TableCell> 
                  <Typography
                    className={classes.label}
                    style={{ 
                      backgroundColor:
                      (( issue.status == 'open' && 'blue' ) ||
                      (  issue.status == 'closed' && 'green' )
                    )}}
                    align="center"
                  >
                  {issue.status}
                  </Typography>
                </TableCell>
                <TableCell>{issue.assignee}</TableCell>
                <TableCell>
                  <IconButton>
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton>
                    <EditIcon color="info" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={issues.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableFooter>
      </TableContainer>

      
      {/* <table style={{width: '100%'}} >
        <tr>
          <th>Order</th>
          <th>Title</th>
          <th>Description</th>
          <th>Label</th>
          <th>Status</th>
          <th>Assignee</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Building front end skeleton</td>
          <td>Building the front end in a fast way</td>
          <td>enhancement</td>
          <td>open</td>
          <td>admin</td>
        </tr>
      </table> */}
  </div>
}

export default ListIssues;
