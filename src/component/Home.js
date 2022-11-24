import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
const Home = () => {

    const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata)


    const getdata = async (e) => {

        const res = await fetch("https://lime-comfortable-beaver.cyclic.app/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        // console.log(data);

        if (res.status === 404 || !data) {
            // console.log("error");

        } else {
            setUserdata(data)
            // console.log("get added")
        }
    }
    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async(id)=>{
        let result = await fetch(`https://lime-comfortable-beaver.cyclic.app/deleteuser/${id}`,{
            method:"delete",
            headers:{
                "Content-Type": "application/json"
            }
        });

        const deletedata = await result.json();
        // console.log(deletedata);

        if(result.status === 422 || !deletedata){
            // console.log("error");
        }else{
            // console.log("user deleted");
            getdata();   
        }
    }
    return (
        <>
            <div className='flex justify-end'>
                <Link to="/register" className='bg-blue-700 m-2 p-2 rounded-lg text-white'>Add data</Link>
            </div>

            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-center">
                    <thead className="text-xs uppercase bg-black  text-white dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-4">id</th>
                            <th scope="col" className="py-3 px-4">Username</th>
                            <th scope="col" className="py-3 px-4">Email</th>
                            <th scope="col" className="py-3 px-4">Job</th>
                            <th scope="col" className="py-3 px-4"> number</th>
                            <th scope="col" className="py-3 px-4">   </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getuserdata.map((item, id) => {
                                return (
                                        <tr  className=" " >
                                            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap" >{id + 1}</th>
                                            <td className="py-4 px-6">{item.name} </td>
                                            <td className="py-4 px-6">{item.email} </td>
                                            <td className="py-4 px-6">{item.work}</td>
                                            <td className="py-4 px-6"> {item.mobile}</td>
                                            <td className="py-4 px-6 flex justify-between">
                                                <Link to={`view/${item._id}`}><button className='bg-green-700 p-2 rounded-lg m-1'><RemoveRedEyeIcon /></button></Link>
                                                <Link to={`edit/${item._id}`}><button className='bg-blue-700 p-2 rounded-lg m-1'><CreateIcon /></button></Link>
                                              <button onClick={()=>deleteuser(item._id)} className='bg-red-600 p-2 rounded-lg m-1'><DeleteOutlineIcon /></button>
                                            </td>
                                        </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default Home