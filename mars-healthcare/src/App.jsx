import Appointments from './Components/Appointments/Appointments';
import CategoryProducts from './Components/CategoryProducts/CategoryProducts';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
      <Navigation />
      <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Homepage/>} />
          <Route path='/products/:category' element={<CategoryProducts />} />
          <Route path='/appointment' element={<Appointments/>}/>
        </Routes>
      </Router>
      </div>
      <Footer/>
    </>
  );
}

export default App;
