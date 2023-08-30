import {BrowserRouter, Routes, Route} from 'react-router-dom';

//pages and components
import Home from './pages/home'
import Tracker from './pages/tracker';
import Navbar from './components/navbar';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route
              path='/'
              element={<Home/>}
            />
            <Route
              path='/tracker'
              element={<Tracker/>}
            />
            <Route
              path='/about'
              element={<About/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
