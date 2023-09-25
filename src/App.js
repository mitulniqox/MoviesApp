import './App.css';
import Home from './page/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviesDetails from './page/MoviesDetails';
import MovieList from './page/MoviesList';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import WatchList from './page/WatchList';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies-details/:id" element={<MoviesDetails />} />
            <Route path="/movies-list" element={<MovieList />} />
            <Route path="/movies-watch-list" element={<WatchList />} />

          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
