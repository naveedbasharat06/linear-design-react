import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'; 
import ChatCard from './components/chatcard';
function App() {
  return (
    <div className='App'>
    <div className="chatcard min-h-screen flex items-center justify-center bg-black">
      <ChatCard />
    </div>
    </div>
  );
}

export default App;
