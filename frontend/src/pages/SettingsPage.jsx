import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import NotificationContext from '../context/NotificationContext';
import axios from 'axios';

const SettingsPage = () => {
  const {user, getToken} = useContext(UserContext);
  const { setQueueNotifications } = useContext(NotificationContext);
  const [photoProfile, setPhotoProfile] = useState('');

  useEffect(() => {
    setPhotoProfile(user.photo_profile);
  }, [])

  const changePhotoProfile = async (e) => {
    console.log(e.target.files[0])
    setPhotoProfile(URL.createObjectURL(e.target.files[0]));
    await updatePhotoProfile(photoProfile);
  }

  const updatePhotoProfile = async (data) => {
    try {
      const token = await getToken();
      const response = await axios.patch(`http://localhost:5000/users?id=${user.id}`, {
        data
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response.status);
    } catch (error) {
         if (error.response) {
          setQueueNotifications([error.response.data.msg]);
         }
    }
  }

  return (
    <div>
      <img className='size-20' src={photoProfile} />
      <input onChange={changePhotoProfile} type='file'/> 
    </div>
  )
}

export default SettingsPage