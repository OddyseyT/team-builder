import React from 'react';

const Form = props => {

}

const handleChanges = event => {

    setNote({ ...note, [event.target.name]: event.target.value }); // 
  };


function MemberDetails({member}) {
    return (
        <div className = "member_info">
            <h2>Member Info</h2>

         <form onSubmit={submitForm}>

         <label htmlFor="name">
           Full Name
          <input id="name" type="text" placeholder="Full Name" onChange={handleChanges} value={note.name} name="name" />
         </label>
        
   
         <label htmlFor="email">email</label>
        <textarea id="email" type="email" placeholder="email address" onChange={handleChanges} value={note.email} name="email" />
   
        <label htmlFor="role">
           Your Role
          <input id="role" type="text" placeholder="Role" onChange={handleChanges} value={note.role} name="role" />
         </label>

         
   
         <button type="submit">Add note</button>
       </form>
    </div>
    )
    
}

export default Form;