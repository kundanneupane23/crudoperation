import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserDashboard = () => {
  const[data,setData] = useState([{}]);
  useEffect(()=> {
      getUser();
      console.log(data);

  },[]);
  const getUser=async()=>{
    await axios
    .get('http://localhost:4000/posts')
    .then((res) => setData(res.data));
  
  };

  
  return (
    <>
    <h1>User Table</h1>
    <table class='table table-hover'>
      
    <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Layout</th>
      <th scope="col">Name</th>
      <th scope="col">Capacity</th>
      <th scope="col">Status</th>
      <th scope="col">Image</th>
      <th scope="col">Action</th>
     
    </tr>
  </thead>
  <tbody>
      {data &&
       data.map((user) =>(
<tr>
      <th scope="row">{user.layout}</th>
      <td>{user.name}</td>
      <td>{user.capacity}</td>
      <td>{user.status}</td>
      <td>{user.image}</td>
      <td
      style={{display:"flex",
    justifyContent:
  "space-between"}}
      >
        <button className='btn
        btn-info'>Edit</button>
        <button className='btn
        btn-danger'>Delete</button>

      </td>
      
    </tr>
    
          )) }
    
  </tbody>
</table>
</table>
    </>
  )
}

export default UserDashboard