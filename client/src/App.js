import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Form from './components/Form';
import Display from './components/Display';
import './App.css';
import { useState } from 'react';


function App() {
  const [todoList, setTodoList] = useState([])

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Form/>} todoList={todoList} setTodoList={setTodoList}/>
          <Route path='/all' todoList={todoList} element={<Display/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
