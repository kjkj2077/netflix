import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieDetail } from './pages/MovieDetail';
import { Movies } from './pages/Movies';
import { Home } from './pages/Home';
import { Navigation } from './components/Navigation';
import { MovieCard } from './components/MovieCard';

// 3개 페이지 필요 홈페이지,무비,무비디테일
// 홈페이지 배너를 볼수있다.
// 3가지 섹션의 영화 볼수있다.(Popular,top,upcoming)
// 각각 영화의 점수 장르 청소년 유무
// 영화 슬라이드로 넘기면서 볼수있다.

//  영화디테일에서 영화 디테일정보 볼수있다.

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<MovieDetail/>}/>
      </Routes>

    </div>
  );
}
export default App;
