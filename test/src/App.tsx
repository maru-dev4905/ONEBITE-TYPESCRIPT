import React from 'react';

import UseReducerTest1 from './components/useReducer/Test1';
import UseReducerTest2 from './components/useReducer/Test2';
import UseReducerTest2RE from './components/useReducer/Test2-re';
import UseReducerTest3 from './components/useReducer/Test3';

import UseEffectTest1 from './components/useEffect/Test1';
import UseEffectTest2 from './components/useEffect/Test2';
import UseEffectTest3 from './components/useEffect/Test3';
import UseRefTest1 from './components/useRef/Test1';
import UseRefTest2 from './components/useRef/Test2';
import UseRefTest3 from './components/useRef/Test3';

function App() {
  return (
    <div className="App">
      {/* <UseReducerTest1 />
      <UseReducerTest2 />
      <UseReducerTest2RE />
      <UseReducerTest3 /> */}
      {/* <UseEffectTest1 />
      <UseEffectTest2 />
      <UseEffectTest3 /> */}
      <UseRefTest1 />
      <UseRefTest2 />
      <UseRefTest3 />
    </div>
  );
}

export default App;
