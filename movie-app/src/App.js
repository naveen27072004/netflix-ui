import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Leo from './Leo';
import { Route ,Routes} from 'react-router-dom';
import Form from './Form';
import Jailer from './Jailer';

function App() {

  return (
    
    <div className="App">
  <Routes>
    <Route path='/' element={<Form/>}/>
    <Route path='/main' element={<Main/>}/>
    <Route path='/leo' element={<Leo/>}/>
   <Route path='/jailer' element={<Jailer/>}/>
  </Routes>
 
    </div>
  
  );
}

export default App;
