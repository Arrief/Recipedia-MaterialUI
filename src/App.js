import { Routes, Route } from 'react-router-dom';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import { Box, Stack } from '@mui/material';
import './App.css';

function App() {
  return (
    // Box is a div, same for Container
    <Box>
      {/* Stack is a grid with only 1 row */}
      <Navbar />
      <Stack 
        direction="row" 
        justifyContent="space-between"
        spacing={2}
      > 
        {/* Sidebar = 1 unit, Feed 4x times bigger, Rightbar 2x times bigger; 
        flex determines width within stack, somewhat like fr in grid */}
        <Sidebar flex={1} />
        <Feed flex={4} />
        <Rightbar flex={2} />
      </Stack>
    </Box>
  );
}

export default App;
