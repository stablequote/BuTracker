import React, { useEffect, useState }from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

import Button from '@mui/material/Button'
import { Container, Grid, Box, Typography, Divider, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Comment from '../common/Comment';
import AddComment from '../common/AddComment';

// SECTIONS (Issue details, comment, history, upload)
// FIELDS: (id, title, description, label, status, priority, create date, dueDate, assignee, owner, submitter, update date, category, attchments )

const useStyles = makeStyles({
  label: {
    backgroundColor: 'purple',
    color: 'white',
    borderRadius: 9,
    marginRight: 6,
    padding:'3px 8px',
    fontSize: 14
  },
  gridBox: {
    marginBottom: 15
  },
  commentBox: {
    marginBottom: 25,
    borderBottom: '1px solid #ccc'
  },
  commentPaper: {
    marginBottom: 25,
  }
})

function ListSingleIssue() {

  const classes = useStyles();

  const { id } = useParams();
  
  const [issue, setIssue] = useState([]);

  useEffect(() => {
    axios.get(`/issue/${id}`).then((res) => setIssue(res.data))
    console.log(id);
}, [])
  return <>
      <Container width="md" sx={{color: '#4843e6'}} component={Paper} elevation={3} >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item  xs={12} >
              <Box className={classes.gridBox}>
                <Grid container spacing={12}>
                  <Grid item sx={12}><span className={classes.label}>id </span> {issue._id}</Grid>
                </Grid>
              </Box>
              <Box className={classes.gridBox}>
                <Grid container spacing={12}>
                  <Grid item sx={12}><span className={classes.label}>Title </span> {issue.title}</Grid>
                </Grid>
              </Box>
              <Box className={classes.gridBox}>
                <Grid container spacing={12}>
                  <Grid item sx={12}><span className={classes.label}>Desc </span> {issue.description}</Grid>
                </Grid>
                <br />
                <Divider />
              </Box>
              <Box className={classes.gridBox}>
                <Grid container spacing={12}>
                  <Grid item sx={4}>
                    <span className={classes.label}>Label </span>
                     {issue.label}
                  </Grid>
                  <Grid item sx={4}>
                    <span className={classes.label}>Status </span>
                     {issue.status}
                  </Grid>
                  <Grid item sx={4}>
                    <span className={classes.label}>Priority </span>
                     {issue.priority}
                  </Grid>
                </Grid>
              </Box>
              <Box className={classes.gridBox}>
                <Grid container spacing={12}>
                  <Grid item sx={12}><span className={classes.label}>Created </span> {moment().format(issue.date)}</Grid>
                  <Grid item sx={12}><span className={classes.label}>Updated </span> {issue.lastUpdated}</Grid>
                </Grid>
              </Box>
              <Divider />
              <br />
              <Box className={classes.gridBox}>
                <Grid container spacing={12}>
                  <Grid item sx={6}>
                    <span className={classes.label}>Assignee</span>
                    {issue.assignee}
                  </Grid>
                  <Grid item sx={6}><span className={classes.label}>Owner</span>{issue.assignedBy}</Grid>
                </Grid>
              </Box>
              <br />
              <Divider />
              <Typography variant="h5" component="h3" color="primary">Attachments</Typography>
              <Box className={classes.gridBox}>
                <div>
                  <img 
                    // src={issue.img}
                    src="https://images.pexels.com/photos/10942519/pexels-photo-10942519.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
                    alt="issue attchments" 
                    width="340" 
                    height="210"
                  />
                </div>
              </Box>
            </Grid>
            <Typography variant="h3" component="h3">Comments</Typography>
            {/* comment section */}
            {/* <Grid item  xs={5} > */}
              {/* <Paper className="commentPaper">
                <Box className={classes.commentBox}>
                  <Typography variant="h5" component="h5">author</Typography>
                  <Typography variant="p" component="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi numquam quaerat tenetur minus ea dolor.</Typography>
                </Box>
              </Paper> */}
              {/* <Comment /> */}
            {/* </Grid> */}
            <AddComment />
          </Grid>
        </Box>
      </Container>
  </>;
}

export default ListSingleIssue;
