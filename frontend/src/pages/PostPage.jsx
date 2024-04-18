import React, { useContext, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { UserContext } from '../context/UserContext';
import NotificationContext from '../context/NotificationContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostPage = () => {
  const {user, getToken} = useContext(UserContext);
  const {setQueueNotifications} = useContext(NotificationContext);

  const [banner, setBanner] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const navigate = useNavigate();

  const submit = async () => {
    let reader = new FileReader();
    reader.readAsDataURL(banner);
    reader.onload = async () => {
      try {
        const response = await axios.post('http://localhost:5000/posts', {
          image: reader.result,
          userId: user.id,
          title,
          content,

        }, {
          headers: {
            Authorization: `Bearer ${await getToken()}`
          }
        });
        setQueueNotifications([response.data.msg]);
        navigate('/', {replace: true})
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className='flex flex-col text-white m-5'>
        <div>
            <span>Banner</span>
            <input type='file' onChange={(e) => setBanner(e.target.files[0])}  />
        </div>
        <div>
            <span>Judul</span>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className='w-full bg-slate-900 outline-none border-none' />
        </div>
        <div className='text-white'>
            <span>Konten</span>
            <br />
            <ReactQuill value={content} onChange={(e) => setContent(e)} className='bg-slate-900  text-white outline-none border-none opacity-80' />
            <br/>
        </div>
        <div>
            <button className='bg-slate-900 p-5 rounded-full hover:opacity-80' onClick={submit}>Upload</button>
        </div>
    </div>
  )
}

export default PostPage