import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios';
import { UserContext } from '../../context/UserContext';

const Users = () => {
  const [users, setUsers] = useState([]);
  const {getToken} = useContext(UserContext);

  useEffect(() => {
    getAllUsers();
  }, [])

  const getAllUsers = async () => {
    const token = await getToken();
    const data = (await axios.get('http://localhost:5000/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })).data
    setUsers(data);
  }

  return (
    users.map((user, idx) => (
      <div key={idx}>
      </div>
    ))
  )
}

export default Users