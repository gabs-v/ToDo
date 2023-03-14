import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Form from './components/Form';
import Display from './components/Display';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Form/>} />
          <Route path='/all' element={<Display/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
