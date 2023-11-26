
import './App.css';
import { useState } from 'react'

function App() {
  const [xAxis, setXAxis] = useState(0)
  const [yAxis, setYAxis] = useState(0)

  return (

    <div className='App'>
      <button className='horizontal' onClick={() => setYAxis(yAxis - 50)} disabled={yAxis === 0}>Up</button>
      <div className='container'>
        <button className='vertical' onClick={() => setXAxis(xAxis - 50)} disabled={xAxis === 0}> Left</button>
        <div className='inner-container'>
          <div className='box' style={{ left: xAxis, top: yAxis }}></div>
          </div>
          <button className='vertical' onClick={() => setXAxis(xAxis + 50)} disabled={xAxis === 450}>Right</button>
        </div>
        <button className='horizontal' onClick={() => setYAxis(yAxis + 50)} disabled={yAxis === 450}>Bottom</button>
      </div>
  );
}

export default App;