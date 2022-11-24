import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Register from './component/Register';
import Edit from './component/Edit';
import View from './component/View';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      

      <Router>
      <Navbar />
      
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>

        <Routes>
          <Route exact path='/register' element={<Register />} />
        </Routes>

        <Routes>
          <Route exact path='/edit/:id' element={<Edit />} />
        </Routes>

        <Routes>
          <Route exact path='/view/:id' element={<View />} />
        </Routes>


      </Router>
    </>
  );
}

export default App;
