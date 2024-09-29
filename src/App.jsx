import React from 'react';
import ResponsiveForm from './Form'; // Importa el componente del formulario
import RegisterForm from './RegisterForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ResponsiveForm/>}></Route>
          <Route path="/register" element={<RegisterForm/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
