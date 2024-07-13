import logo from './logo.svg';
import './App.css';
import Input from './components';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([])
  console.log({ taskList });
  return (
    <div>
      <h1>To Do Board</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
