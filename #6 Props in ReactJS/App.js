import React from 'react'
import './App.css';
import SampleFunction from './Components/FunctionComponent';
import SampleClass from './Components/ClassComponent';

function App() {

  return (
    <div>
      <SampleFunction name="Vinod" age="20">
        <p>I'm unmarried</p>
      </SampleFunction>
      <SampleFunction name="Amol" age="25">
        <button>Click here</button>
      </SampleFunction>
      <SampleFunction name="Prasad" age="30"></SampleFunction>

      <SampleClass name = "Iron Man" age= "23">
        <p>I'm a Super Hero</p>
      </SampleClass>
      <SampleClass name = "Captain America" age= "26"></SampleClass>
      <SampleClass name = "Hulk" age= "29"></SampleClass>
    </div>
  );
}

export default App;
