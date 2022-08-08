import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieDetail } from './pages/MovieDetail';
import { Movies } from './pages/Movies';
import { Home } from './pages/Home';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Notfound } from './pages/Notfound';


function App() {
  return (
    <div className="App">
      
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
        <Footer />
      
    </div>
  );
}
export default App;
