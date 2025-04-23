import React from 'react';
import FormStatus from './components/FormStatus';  // Add this import
import './App.css';

function App() {
  return (
    <div className="App">
      <FormStatus />  {/* Add this to render the FormStatus component */}
    </div>
  );
}

export default App;
