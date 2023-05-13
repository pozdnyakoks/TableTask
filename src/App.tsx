import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import ToNavigator from './components/ToNavigator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ToNavigator />} />
        <Route path='navigator' element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
