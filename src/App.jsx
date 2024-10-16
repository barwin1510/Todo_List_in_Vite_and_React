import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import ListItems from './ListItems.jsx'

function App() {
  const[name,setName]=useState("")    
  const[list,setList]=useState(JSON.parse(localStorage.getItem("todo_list")) || [])

  useEffect(() => {
    localStorage.setItem("todo_list", JSON.stringify(list));
  }, [list]);

  const inputRef=useRef()
 
  const updateName=(e)=>{
    setName(e.target.value)
  }

  const handleClick=()=>{
    if(name.trim()){
    setList([...list,{name:name,checked:false}])
    setName("")
    }
    inputRef.current.focus()
  }

  const handleKeyDown=(e)=>{
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  const delbtn=(index)=>{
    const updatedelbtn=list.filter((item,i)=>i != index)
    setList(updatedelbtn)
  }

  const handleCheck=(index)=>{
    const updateCheck=list.map((checkitem,i)=>i===index ? {...checkitem,checked:!checkitem.checked} : checkitem)
    setList(updateCheck)
  }


  return (
    <>
    <div class="App">
      <div class="cardbg">
        <div class="card">
          <h2 class="title">To-Do List</h2>
          <div class="inputadd">
          <input class="input" placeholder=" Type your list" value={name} ref={inputRef} onChange={updateName} onKeyDown={handleKeyDown}></input>
          <button class="add" onClick={handleClick}>Add</button>
          {list.map((item,index)=><ListItems name={item.name} index={index} del={()=>delbtn(index)} checked={item.checked} handleCheck={()=>{handleCheck(index)}}/>)}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
