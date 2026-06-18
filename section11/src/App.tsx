import {useState, useRef, useEffect, useReducer} from 'react';
import './App.css';
import {Todo} from './types';

import Editor from './components/Editor';
import TodoItem from './components/TodoItem';

type Action = {
  type: "CREATE";
  data : {
    id: number;
    content: string;
  }
} | {type: "DELETE"; id: number};

function reducer(state: Todo[], action:Action){
  switch(action.type){
    case "CREATE":
      return [...state, action.data];
    case "DELETE":
      return state.filter((todo)=> todo.id !== action.id);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  const idRef = useRef<number>(0);

  
  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++, 
        content: text
      }
    })
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    })
  }

  useEffect(()=>{
    console.log(todos);
  },[todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd} />
      <ul>
        {todos.map((todo)=>{
          return <TodoItem key={todo.id} {...todo} onClickDelete={onClickDelete} />
        })}
      </ul>
    </div>
  );
}

export default App;
  