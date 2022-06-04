import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Restaurants from './pages/Restaurants';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route />
      <Route />
      <Route />
    </Routes>
  );
}

export default App;
