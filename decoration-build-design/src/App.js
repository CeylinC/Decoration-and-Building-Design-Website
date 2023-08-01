import './App.css';
import Navbar from './components/navbar/Navbar';
import AboutUs from './pages/about-us/AboutUs';
import Homepage from './pages/home-page/Homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route index element={<Homepage />}/>
            <Route path='/hakkimizda' element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
