import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from './components/Form';
import TeammateRender from './components/TeammateRender'


import './App.css';

function App() {

    const [member, setMember] = useState([{name: "Theresa", email: "oddyseyt@gmail.com", role: "slacker"}] );
    const addToMember = person => {setMember([...member,person])}
    return (
      <div className="App">
      <h1>Team Members</h1>
      <Form addToMember={addToMember}/>
      <TeammateRender member={member}/>
      
    </div>
  );
}


export default App;
