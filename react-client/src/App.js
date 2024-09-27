import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('Tá pegando??'); 
    fetch('/api')
      .then((response) => {
        console.log('Pegou mesmo:', response);
        return response.json();
      })
      .then((data) => {
        console.log('Data received:', data);
        setMessage(data.message);
      })
      .catch((error) => {
        console.error('Erro detectado:', error);
      });
  }, []);

  return (
    <div>
      <h1>React Proxy com Express</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
