import React from 'react';
import './App.css';
import List from './Components/List';
import AddForm from './Components/AddForm';

function App() {
  return (
    <div className="App">
      <AddForm/>
      <List/>
    </div>
  );
}

export default App;
