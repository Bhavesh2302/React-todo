import React from 'react'
import Todoitem from "./Todoitem"
import { useState } from 'react'
import styles from "./styles.module.css"

const Todolist = ({title,handleDelete,todos,id}) => {

    // const [value, setvalue] = useState("")


//     const handleDeletefn=()=>{

       
// handleDelete(id)
//     }


    // const handleChange=(e)=>{
    //     setvalue(e.target.checked)
    // }

  return (
    <div className={styles.todolistdiv}>


        {/* <input value={value}type="checkbox" onChange={handleChange}/> */}
     
            <Todoitem title={title} handleDelete={handleDelete}id={id}/>
          
       
       
    </div>
  )
}

export default Todolist