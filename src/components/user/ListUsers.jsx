import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListUsers() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('https://butrackerapi.herokuapp.com/users').then((res) => setUser(res.data))
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
