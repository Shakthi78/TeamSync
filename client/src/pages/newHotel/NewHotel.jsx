import React, { useState } from 'react'
import './newHotel.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { taskInputs } from '../../formSource';
import useFetch from '../../hooks/useFetch';

const NewHotel = () => {
  const [files, setFiles] = useState("")
  const [info, setInfo] = useState({})
  const [assignee, setAssignee] = useState([])

  const {data, loading, error} = useFetch("http://localhost:8800/api/users")

  const handleChange = (e)=>{
    setInfo({...info, [e.target.id]: e.target.value})
  }

  const handleSelect = (e)=> {
    const value = Array.from(e.target.selectedOptions, (option)=> option.value)
    setAssignee(value)
  }
  const handleClick = async(e)=>{
    e.preventDefault()
    try {
      
      const newHotel = {
        ...info,
        assignee        
      }

      const response = await fetch("http://localhost:8800/api/tasks", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHotel),
      })
      
      return response.json()
    } catch (error) {
      console.log(error)
    }
  }
  console.log(files)

  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add new task</h1>
        </div>
        <div className="bottom">
          
          <div className="right">
            <form >
              
              {taskInputs.map((input)=>{
              return (
              <div key={input.id} className="formInput">
                <label>{input.label}</label>
                <input onChange={handleChange} type={input.type} placeholder={input.placeholder} id={input.id} />
              </div>
              )
              })}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>                
              </div>

              <div className="selectRooms">
                <label>Assigned to</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading ? "loading" 
                  : 
                  data && data.map((user)=>(
                    <option key={user._id} value={user.username}>{user.username}</option>
                  ))
                  }
                </select>                
              </div>
              <button onClick={handleClick}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewHotel