
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material'

const App = ()=> (
  <BrowserRouter>
  <Box sx={{backgroundColor: '#000'}}>
    <Routes>
      <Route path='/' exact element={< Feed/>} />
      <Route path='/video/:id' exact element={< VideoDetail/>} />

    </Routes>
  </Box>

  </BrowserRouter>
)

export default App;
