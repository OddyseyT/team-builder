import React, { useState } from "react";
import Form from './components/Form';

import './App.css';

function App() {

    const [member, setMember] = useState([] );
    return (
      <div className="App">
      <h1>Team Members</h1>
      <Form  />
      
    </div>
  );
}


export default App;
