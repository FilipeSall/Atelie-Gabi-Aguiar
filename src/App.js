import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './GlobalContext.js';
import './App.css';
import Home from './components/home/Home.js';
import Header from './components/header/Header.js';
import Services from './components/services/Services.js';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Header />

          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/services' element={<Services />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
