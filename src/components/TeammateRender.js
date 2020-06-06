import React, { useState } from "react";

const TeammateRender = props => {
    return (
      <div className="member-list">
        {props.member.map(person => (
          <div className="note" key={person.id}>
            <p>{person.name}</p>
            <p>{person.email}</p>
            <p>{person.role}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default TeammateRender;
  