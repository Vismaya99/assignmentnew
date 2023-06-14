import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Viewall from './Components/Viewall';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' exact element={<Viewall/>}/>
      <Route path='/viewall' exact element={<Viewall/>}/>
      

    </Routes>
    </BrowserRouter>
  );
}

export default App;
