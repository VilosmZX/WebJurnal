import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import NotificationContext from '../context/NotificationContext';
import axios from 'axios';
import { Buffer } from 'buffer';
import { Helmet } from 'react-helmet';

const SettingsPage = () => {
  const {user, getToken} = useContext(UserContext);
  const {setQueueNotifications } = useContext(NotificationContext);

  
  const update = async (e) => {
    console.log(image);
    e.preventDefault();
    try {
      const token = await getToken();
      const response = await axios.post(`http://localhost:5000/users/update?id=${user.id}`, {
        data
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      console.log(response.status);
    } catch (error) {
         if (error.response) {
          setQueueNotifications([error.response.data.msg]);
         }
    }
  }

  return (
    <>
      <Helmet>
        <title>{user.firstName}'s Settings</title>
      </Helmet>
      <div>
        <form onSubmit={update}>
            <img className='size-20' src={photoProfile} />
            <input onChange={changePhotoProfile} name='photoProfile' type='file'/> 
            <input onChange={e => setUsername(e.target.value)} name='username' value={username}/>
            <button onClick={update}>Update</button>
        </form>
      </div>
    </>
  )
}

export default SettingsPage