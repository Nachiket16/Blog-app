import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap';
import Base from './component/Base';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='home' element={<h1>home</h1>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
