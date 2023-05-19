import { Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import AddEmployee from './component/AddEmployee';
import Home from './component/Home';
import First from './component/First';
import Query from './component/Query';
import Update from './component/Update';
import View from './component/View';
import Modify from './component/Modify';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<First/>}/>
        <Route path='/addemployee' element={<AddEmployee/>}/>
        <Route path='/query' element={<View/>}/>
        <Route path='/update' element={<Modify/>}/>
      </Routes>
    </div>
  );
}

export default App;
