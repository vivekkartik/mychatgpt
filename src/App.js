import {useState} from 'react'
import { generateText, fetchApiKey } from './generation.js';
import './App.css'

function App() {
  const [output,setOutput] = useState();
  const [promt, setPromt] = useState();
  const [apiKey,setApiKey] = useState('');
  const handleSubmit = async(e) =>{
    e.preventDefault();
     await fetchApiKey(apiKey);
     const result = await generateText(promt)
    setOutput(result)
  }
  
  return (
    <div className="App">
        <input className='api-key'type='text' placeholder='Enter Api key' onChange={(e)=>{setApiKey(e.target.value)}}/>
        <div className='output-question'> question: {promt}?</div>
        <div className='output'>{output}</div>
      <form  className='form-inputs' onSubmit={handleSubmit}>
        <input className = 'promt-input'type='text' placeholder='Ask any question? '
          onChange={(e)=>{setPromt(e.target.value)}}
          /> 
        <button type='submit'>submit</button>
      </form>
    </div>
  );
}

export default App;
