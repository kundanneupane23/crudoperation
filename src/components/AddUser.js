import axios from 'axios';
import React, { useState }  from 'react'
import './AddUser.css';



const AddUser = () => {
  const [formData,setFormData]=useState({
    layout:'',
    name:'',
    capacity:'',
    status:'',
    image:'',
});

const handleFormSubmit=async(e)=>{
  let response = await axios.post('http://localhost:4000/posts',formData);

  if(response) {
      alert("Data submitted sucessfully");
  }else{
      alert("Something went wrong");
  }

  setFormData({
    layout:'',
    name:'',
    capacity:'',
    status:'',
    image:'',
});
};
 
  return (
<>

        <h1>Crud Operation</h1>



<form>
<div class="form-group row">
    <label for="exampleFormControlSelect1" class="col-sm-2 col">Layout:</label>
    <div class="col-sm-10">
    <select 
     class="form-control"
      id="exampleFormControlSelect1"
      value={formData.layout}
      onChange={(e)=> setFormData ({ ...formData,layout:e.target.value})}
      >
    <option>Select Layout</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      </select>
    </div>
  </div>


  <div class="form-group row">
    <label for="inputName1" class="col-sm-2 col-form-label">Name:</label>
    <div class="col-sm-10" >
      <input 
      type="text" 
      class="form-control"
       id="inputName1" 
       placeholder="Enter Name "
       value={formData.name}
       onChange={(e)=> setFormData ({ ...formData,name:e.target.value})}
       />
    </div>
  </div>


  <div class="form-group row">
    <label for="inputcapacity1" class="col-sm-2 col-form-label">Capacity:</label>
    <div class="col-sm-10">
      <input 
      type="text"
       class="form-control"
        id="inputcapacity1" 
        placeholder="Enter number of capacity "
        value={formData.capacity}
        onChange={(e)=> setFormData ({ ...formData,capacity:e.target.value})}
        />
    </div>
  </div>

 

  <div class="form-group row">
    <div class="col-sm-2">Status:</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input
         class="form-check-input" 
         type="checkbox" 
         id="gridCheck1"
         value={formData.status}
         onChange={(e)=> setFormData ({ ...formData,status:e.target.value})}
         
         />
         </div>
    </div>
  </div>

  <div class="form-group row">
    <label for="exampleImage" class="col-sm-2">Image:   </label>
    <div class="col-sm-10" >
    <input
     type="file"
      class="form-control-file"
       id="exampleImage"
       value={formData.image}
       onChange={(e)=> setFormData ({ ...formData,image:e.target.value})}
       />
  </div></div>



  <div class="form-group ">
   <button type="submit" class="btn1btn" onClick={handleFormSubmit}>Create Table</button>
      <button type="submit" class="btn2btn">Cancel</button>
    </div>
   
</form>





</>
  )
}

export default AddUser