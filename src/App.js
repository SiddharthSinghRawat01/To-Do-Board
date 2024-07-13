import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([])
  console.log({ taskList });
  return (
    <>
    <div className='flex flex-col items-center justify-center py-8 gap-4'>
      <h1 className='text-xl font-semibold'>To Do Board</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div>
        {taskList.map((task,index) => 
          <li key={index}>{task}</li> // 1. Note
        )}
      </div>
    </div>
    </>
  );
}

export default App;

/* 1. Note: 
In this form, curly braces {} are used around the arrow function's body.
When you use curly braces, you create a block statement in JavaScript.
In JavaScript, a block statement {} does not implicitly return a value unless you explicitly use the return keyword.
Therefore, in this case, the arrow function { <li key={index}>{task}</li> } does not return anything explicitly. It's just a block of code that does not produce any output. 

2. Note: 
Why Fragments or <></> Are Used:
Single Root Node Requirement: JSX syntax in React expects a single root element to be returned from the component's render method. This is because React needs to reconcile the virtual DOM with the actual DOM efficiently.

Avoid Unnecessary DOM Elements: Using fragments (<></>) or React.Fragment avoids the creation of unnecessary DOM nodes. If you were to wrap your elements in a <div> instead of a fragment, an extra <div> would appear in the actual DOM, which might affect styling and layout.

Cleaner JSX: Fragments keep your JSX cleaner and more readable, especially when you have multiple sibling elements to render.

Key Points:
Single Root Element: React components must return a single root element. Fragments (<></> or <React.Fragment>) allow you to return multiple elements as if they were contained within a single element without adding extra nodes to the DOM.

Fragment Syntax: The empty tags <>...</> (or <React.Fragment>...</React.Fragment>) provide a concise and clear way to wrap multiple JSX elements.

Usage: Use fragments whenever you need to return multiple elements from a component's render method without introducing an unnecessary wrapper element like a <div>.

*/
