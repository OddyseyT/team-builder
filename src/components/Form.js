import React, { useState } from "react";


const Form = props => {
    const [person, setPerson] = useState([{name: "", email: "", role: ""}]);
    

const handleChanges = event => {

    setPerson({ ...person, [event.target.name]: event.target.value });  
  };

  const submitForm = event => {
    event.preventDefault();
    props.addToMember(person); 
    setPerson({name:"", email: "", role: ""})
  }

    
    return (
        <div className = "member_info">
            <h2>Member Info</h2>

         <form onSubmit={submitForm}>

         <label htmlFor="name">
           Full Name
          <input id="name" type="text" placeholder="Full Name" onChange={handleChanges} value={person.name} name="name" />
         </label>
        
   
         <label htmlFor="email">email</label>
        <textarea id="email" type="email" placeholder="email address" onChange={handleChanges} value={person.email} name="email" />
   
        <label htmlFor="role">
           Your Role
          <input id="role" type="text" placeholder="Role" onChange={handleChanges} value={person.role} name="role" />
         </label>

         
   
         <button type="submit">Add member</button>
       </form>
    </div>
    )
    
}


export default Form;