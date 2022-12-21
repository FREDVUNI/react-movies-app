import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import WatchListMovies from './features/WatchListMovies'
import AddMovies from './features/AddMovies'
import WatchedMovies from './features/WatchedMovies'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
 
function App() {
  return (
    <Router>
      <ToastContainer/>
      <Header/>
      <Routes>
        <Route path="/" element={<WatchListMovies/>}/>
        <Route path="/add-movies" element={<AddMovies/>}/>
        <Route path="/watched-movies" element={<WatchedMovies/>}/>
      </Routes>
    </Router>
  );
}

export default App;
