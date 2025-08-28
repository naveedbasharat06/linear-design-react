import React from 'react';
import './App.css';
import './index.css'; 
import ChatCard from './components/chatcard';
function App() {
  return (
    <div className='App'>
    <div className="chatcard min-h-screen flex items-center justify-center bg-black font-inter">
      <ChatCard />
    </div>
    </div>
  );
}

export default App;
