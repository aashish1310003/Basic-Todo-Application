import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './components/counter';
import TodoApp from './components/todo/TodoApp';

function App() {
  return (
    
          <TodoApp />


  );
}

function CounterHelper(){
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <span className="count">{count}</span>
      <Counter by={1} count={count} setCount={setCount} />
      <Counter by={2} count={count} setCount={setCount} />
      <Counter by={5} count={count} setCount={setCount} />
    </div>
  );
}

function FirstComponents(){
  return (
    <div className="FirstComponent">
      FirstComponents
    </div>
  );
}

// second: () => { 
//   return (
//     <h1> root</h1>
//   )
// }

export default App;
