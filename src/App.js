import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import config from '../../config/config'

function App() {
  const [project, setProject] = useState([]);
  const [issue, setIssue] = useState([]);
  
  const [user, setUser] = useState([]);
  useEffect(() => {
      const res = axios.get('/projects').then((res) => setProject(res.data))
  }, [])

  return (
    <div className="App">
      <h1>Front end</h1>
      <ul>
        {project.map(project => (
          <li key={project._id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
