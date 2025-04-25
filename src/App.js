
import './App.css';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Home from './Components/Home.js';
import Create from './Components/Create.js';
import Update from './Components/Update.js';
import Read from './Components/Read.js';
import Test from './Components/Test.js';


function App() {
  return (
  <>
  {/* <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}> </Route>
    <Route path='/create' element={<Create />}> </Route>
    <Route path='/update/:id' element={<Update />}> </Route>
    <Route path='/read/:id' element={<Read />}></Route>

  </Routes>
  </BrowserRouter> */}
  <Test />
  </>
  );
}

export default App;
