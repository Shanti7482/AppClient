
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Chatpage from './pages/chatpage/Chatpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/chats' element={<Chatpage />} />
        {/* <Route path='*' element={<Errorpage/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
