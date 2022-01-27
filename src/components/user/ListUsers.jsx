import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListUsers() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const res = axios.get('/projects').then((res) => setUser(res.data))
    }, [])
  return <div>
      <ul>
        {user.map(user => (
          <li key={user._id}>{user.firstName}</li>
        ))}
      </ul>
  </div>;
}

export default ListUsers;
