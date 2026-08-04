import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Simple Counter App</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>

      <br />
      <br />

      <button onClick={removeValue}>Remove Value</button>

      
    </>
  );
}

export default App;







// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [counter, setCounter] = useState(15)

//   const addValue = () => {
//     if (counter < 20) {
//       setCounter(counter + 1)
//     }
//   }

//   const removeValue = () => {
//     if (counter > 0) {
//       setCounter(counter - 1)
//     }
//   }

//   return (
//     <>
//       <h1>Simple Counter App</h1>
//       <h2>Counter value: {counter}</h2>

//       <button onClick={addValue}>
//         Add Value
//       </button>

//       <br /><br />

//       <button onClick={removeValue}>
//         Remove Value
//       </button>

//       <p>Footer: {counter}</p>
//     </>
//   )
// }

// export default App






















// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [counter, setCounter]  = useState(15)

//   //let counter = 15

//   const addValue = () => {
//     //counter = counter + 1
//     setCounter(prevCounter => prevCounter + 1)
//     setCounter(prevCounter => prevCounter + 1 )
//     setCounter(prevCounter => prevCounter + 1)
//     setCounter(prevCounter => prevCounter + 1)
    
//   }

//   const removeValue = () => {
//     setCounter(counter - 1)
//   }
  
//   return (
//     <>
//       <h1>Chai aur react</h1>
//       <h2>Counter value: {counter}</h2>

//       <button
//       onClick={addValue}
//       >Add value {counter}</button> 
//       <br />
//       <button
//       onClick={removeValue}
//       >remove value {counter}</button>
//       <p>footer: {counter}</p>
//     </>
//   )
// }

// export default App
