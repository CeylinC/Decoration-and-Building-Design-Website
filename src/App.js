import './App.css';
import Navbar from './components/navbar/Navbar';
import AboutUs from './pages/about-us/AboutUs';
import Homepage from './pages/home-page/Homepage';
import ConnectPage from './pages/connect-page/ConnectPage';
import Footer from './components/footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProjectPage from './pages/project-page/ProjectPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Homepage />}/>
            <Route path='/hakkimizda' element={<AboutUs />} />
            <Route path='/projeler' element={<ProjectPage />} />
            <Route path='/iletisim' element={<ConnectPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
