import React, { useEffect, useState, useRef, useContext } from 'react'
import axios from 'axios'
import NotificationContext from '../../context/NotificationContext';
import { UserContext } from '../../context/UserContext';

const Banners = () => {
  const [banner, setBanner] = useState('');
  const [banners, setBanners] = useState([]);
  const fileInput = useRef();
  const {setQueueNotifications} = useContext(NotificationContext);
  const {getToken} = useContext(UserContext);

  useEffect(() => {
    getData();
    getBanners();
  }, []);

  const getData = async () => {
    const response = await axios.get('http://localhost:5000/current-banner');
    setBanner(response.data.image);
  }

  const getBanners = async () => {
    const response = await axios.get('http://localhost:5000/banners', {
      headers: {
        Authorization: `Bearer ${await getToken()}`
      }
    })
    console.log(response.data);
    setBanners(response.data);
  }

  const updateBanner = async (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = async () => {
      setBanner(reader.result);
      try {
        const response = await axios.post('http://localhost:5000/banners', {
          image: reader.result
        }, {
          headers: {
            Authorization: `Bearer ${await getToken()}`
          }
        });
        setBanners(prev => [...prev, response.data]);
        setQueueNotifications(['Banner berhasil di ubah!']);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const changeBanner = async (e) => {
    setBanner(e.target.getAttribute('src'));
    try {
      await axios.post('http://localhost:5000/banners', {
        url: e.target.getAttribute('src')
      }, {
        headers: {
          Authorization: `Bearer ${await getToken()}`
        }
      });
      setQueueNotifications(['Banner berhasil di ubah!']);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex gap-1'>
      <div className='flex-1'>
        <img src={banner || 'https://fakeimg.pl/1280x720'} className='transition-all hover:opacity-50 cursor-pointer object-fill h-[100%] w-[100%]' onClick={() => fileInput.current.click()}/>
        <input onChange={updateBanner} accept='image/*' type='file' ref={fileInput} className='hidden' />
      </div>
      <div className='flex-[0.25] overflow-y-scroll flex flex-col gap-1 rounded-lg scrollbar-hide'>
        {banners.map((banner) => (
          <img src={banner || 'https://fakeimg.pl/1280x720'} className='object-cover h-25 w-60 cursor-pointer transition-all duration-300 hover:opacity-60' onClick={changeBanner}/>
        ))}
      </div>
    </div>
  )
}

export default Banners