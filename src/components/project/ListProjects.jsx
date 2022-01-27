import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListProjects() {
    const [project, setProject] = useState([]);

    useEffect(() => {
        const res = axios.get('/projects').then((res) => setProject(res.data))
    }, [])
  return <div>
      <ul>
        {project.map(project => (
          <li key={project._id}>{project.name}</li>
        ))}
      </ul>
  </div>;
}

export default ListProjects;
