import { Card, CardContent } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link, useParams, useNavigate } from 'react-router-dom';
import logo from "../component/logo.png"



const View = () => {
  const navigate = useNavigate();
  const { id } = useParams("");
  // console.log(id)
  const [getuserdata, setUserdata] = useState([]);
  // console.log(getuserdata)


  const getdata = async () => {
    const res = await fetch(`https://lime-comfortable-beaver.cyclic.app/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    // console.log(data);

    if (res.status === 422 || !data) {
      // console.log("error");

    } else {
      setUserdata(data)
      // console.log("get added")
    }
  }
  useEffect(() => {
    getdata();
  }, [])

  const deleteuser = async (id) => {
    let result = await fetch(`https://lime-comfortable-beaver.cyclic.app/deleteuser/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const deletedata = await result.json();
    // console.log(deletedata);

    if (result.status === 422 || !deletedata) {
      // console.log("error");
    } else {
      // console.log("user deleted");
      navigate("/")
      // getdata();
    }
  }

  return (
    <div>
      <h1 className='text-xl font-medium'>Welcome Salman Sakri</h1>
      <Card sx={{ maxWidth: 400 }} >
        <CardContent>
          <div className='flex flex-col'>
            <div className='grid'>
              <img className='w-20 absolute' src={logo} alt='logo' />
              <div className='flex justify-end'>
                <Link to={`/edit/${getuserdata._id}`}><button className='bg-blue-700 p-2 rounded-lg m-1'><CreateIcon /></button></Link>
                <button onClick={() => deleteuser(getuserdata._id)} className='bg-red-600 p-2 rounded-lg m-1'><DeleteOutlineIcon /></button>
              </div>
              <div className='mt-10'>
                <h3 className='text-xl font-medium'>Name: <span className='text-lg font-normal'>{getuserdata.name}</span> </h3>
                <h3 className='text-xl font-medium'>Age: <span className='text-lg font-normal'>{getuserdata.age} </span> </h3>
                <p className='text-xl font-medium'><MailOutlineIcon /> Mobile: <span className='text-lg font-normal'>{getuserdata.email}</span></p>
                <p className='text-xl font-medium'><WorkIcon />Ocupation: <span className='text-lg font-normal'>{getuserdata.work}</span></p>
              </div>
            </div>

            <div className=''>
              <p className='text-xl font-medium'> <PhoneAndroidIcon /> mobile: <span className='text-lg font-normal'>+91 {getuserdata.mobile}</span></p>
              <p className='text-xl font-medium'><LocationOnIcon /> Location: <span className='text-lg font-normal'>{getuserdata.address}</span></p>
              <p>Description: <span>{getuserdata.description}</span></p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}

export default View