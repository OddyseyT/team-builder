import React from 'react';

const Form = props => {
    console.log(props)
    return (
      
        <div className = "member-list">
            <MemberDetails member={props.member}/>
        </div>
    )
}

const handleChanges = event => {

    setPerson({ ...member, [event.target.name]: event.target.value }); // 
  };


function MemberDetails({member}) {
    return (
        <div className = "member_info">
            <h2>Member Info</h2>

         <form onSubmit={submitForm}>

         <label htmlFor="name">
           Full Name
          <input id="name" type="text" placeholder="Full Name" onChange={handleChanges} value={member.name} name="name" />
         </label>
        
   
         <label htmlFor="email">email</label>
        <textarea id="email" type="email" placeholder="email address" onChange={handleChanges} value={member.email} name="email" />
   
        <label htmlFor="role">
           Your Role
          <input id="role" type="text" placeholder="Role" onChange={handleChanges} value={member.role} name="role" />
         </label>

         
   
         <button type="submit">Add member</button>
       </form>
    </div>
    )
    
}

export default Form;