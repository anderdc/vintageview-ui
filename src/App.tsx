import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import './App.css'

const App: React.FC = () => {
    const [count, setCount] = useState(0)

  return (
    <>
      <Typography fontSize={45}>VintageView</Typography>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
};

export default App