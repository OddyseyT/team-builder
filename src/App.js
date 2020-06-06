import React, { useState } from "react";
import Form from './components/Form';

import './App.css';

function App() {

    const [member, setMember] = useState([] );
    const addToMember = person => {setMember([...setMember,person])}
    return (
      <div className="App">
      <h1>Team Members</h1>
      <Form member={member}/>
      
    </div>
  );
}


export default App;
