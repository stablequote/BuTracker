import React, { useState } from 'react';
import axios from 'axios';

import { Container, TextField, InputLabel, MenuItem, Select, Button, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AddIcon from '@mui/icons-material/Add';

function CreateIssue() {

  const [input, setInput] = useState({
    title:  '',
    description: '',
    label: '',
    status: '',
    priority: '',
    assignee: '',
})

function handleChange(e) {
    console.log(e.target.value);
    const {name, value} = e.target;

    setInput(prevInput => {
        return {
            ...prevInput,
            [name]: value
        }
    })
}

function handleSubmit(e) {
    e.preventDefault();
    alert(`From submitted`)
    const newIssue = {
        title: input.title,
        description: input.description,
        label: input.label,
        status: input.status,
        priority: input.priority,
        assignee: input.assignee,
    }
    axios.post('https://butrackerapi.herokuapp.com/issue/create', newIssue)
    console.log(newIssue)
}

{/* dueDate, status, label, priority, category, assignee */}

  return (
   <div>
     <Container width="sm">
      <Typography 
       variant="h4" 
       component="h3" 
       align="center" 
       color="primary" 
       sx={{marginBottom: 3}}
      >
      Create Issue
      </Typography>
        <form action="/issue/create" method="POST">
          <TextField 
          label="Title" 
          id="fullWidth" 
          sx={{ minWidth: 400, marginBottom: 1}} 
          name="title" 
          value={input.value} 
          onChange={handleChange}
          />
          <TextField 
          fullWidth 
          label="Description" 
          id="fullWidth" 
          sx={{marginBottom: 1}} n
          ame="description" 
          value={input.value} 
          onChange={handleChange} 
          />
          <FormControl sx={{marginBottom: 1}}>
            <FormLabel id="demo-row-radio-buttons-group-label">Priority</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="priority"
              value={input.value}
              onChange={handleChange}
            >
              <FormControlLabel value="high" control={<Radio />} label="high" />
              <FormControlLabel value="medium" control={<Radio />} label="medium" />
              <FormControlLabel value="low" control={<Radio />} label="low" />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth sx={{ minWidth: 80, marginBottom: 1 }}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="status"
              label="Status"
              value={input.value}
              name="status"
              onChange={handleChange}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="closed">Closed</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{marginBottom: 1}}>
            <InputLabel id="demo-simple-select-label">Label</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="label"
              label="label"
              value={input.value}
              name="label"
              onChange={handleChange}
            >
              <MenuItem value="bug">Bug</MenuItem>
              <MenuItem value="feature">Feature</MenuItem>
              <MenuItem value="step">Step</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{marginBottom: 4}}>
            <InputLabel id="demo-simple-select-label">Assign to</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="assignee"
              label="assignee"
              value={input.value}
              name="assignee"
              onChange={handleChange}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="metin">Metin</MenuItem>
              <MenuItem value="joe">Joe</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit" 
            variant="contained" 
            color="success" 
            startIcon={<AddIcon />}
            onSubmit={handleSubmit}
          >
            create
          </Button>
          <Button variant="outlined" color="info" href="/issue/list" sx={{display:"inline-block", justifyContent: "right", Width: 8, marginLeft: 75}} >Cancel</Button>
        </form>
    </Container>
  </div>

)}

export default CreateIssue;






































// LEGACY CODE


// function CreateIssue({name}) {
//   return <>
//     <h3>Creat an issue</h3>
//     <form action="/issue/create" method="POST">
//       <div>
//         <label htmlFor="title">
//           <input type="text" placeholder="issue title" id="title" name="title" value=""/>
//         </label>
//       </div>
//       <div>
//         <label htmlFor="description">
//           <input type="text" placeholder="issue description" id="description" name="description" value=""/>
//         </label>
//       </div>
//       <div>
//         <label htmlFor="status">
//           <select name="" id="">
//             <option value="">open</option>
//             <option value="">closed</option>
//             <option value="">pending</option>
//           </select>
//         </label>
//       </div>
//       <div>
//         <label htmlFor="label">
//           <select name="" id="">
//             <option value="">bug</option>
//             <option value="">feature</option>
//             <option value="">stagging</option>
//           </select>
//         </label>
//       </div>
//       <div>
//         <label htmlFor="category">
//           <select name="" id="">
//             <option value="">front end</option>
//             <option value="">back end</option>
//             <option value="">devops</option>
//           </select>
//         </label>
//       </div>
//       <div>
//           <div>
//             <input type="checkbox" value="high"/>
//             <label htmlFor="">high</label>
//           </div>
//           <div>
//             <input type="checkbox" value="medium"/>
//             <label htmlFor="">medium</label>
//           </div>
//           <div>
//             <input type="checkbox" value="low"/>
//             <label htmlFor="">low</label>
//           </div>
//       </div>
//       <div>
//         <label htmlFor="assignee">
//           <select name="" id="">
//             <option value="">John Doe</option>
//             <option value="">Mark Zuckerberk</option>
//           </select>
//         </label>
//       </div>
//       <button>create</button>
//     </form>
//     <button>cancel</button>
//   </>
// }

// export default CreateIssue;
