
import Counter from './componenets/counter.js';
import React, { useState } from 'react';
import './App.css';
import TopBar from './Topbar';

function App() {
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    setCounters([...counters, { key: Date.now(), value: 0 }]);
  };

  return (
    <>
    <TopBar></TopBar>
    <div className="App">
      <header className="header">
        <h1>Welcome to My App</h1>
        <button className="login-button" onClick={addCounter}>
          ADD Counter
        </button>
      </header>
      <div className="counters">
        {counters.map((counter) => (
          <Counter key={counter.key} initialValue={counter.value} />
        ))}
      </div>
    </div>
    </>
  );
}

export default App;



// export default App;

// import React, { useState } from 'react';
// import './App.css';
// import TopBar from './Topbar';
// import Counter from './componenets/counter'; // Import your Counter component

// function App() {
//   const [counters, setCounters] = useState([]);

//   const addCounter = () => {
//     // Generate a unique ID for the new counter
//     const newCounterId = Date.now();
//     setCounters([...counters, { id: newCounterId, value: 0 }]);
//   };
//   console.log(counters);
//   return (
//     <>
//       <TopBar></TopBar>
//       <div className="App">
//         <header className="header">
//           <h1>Welcome to My App</h1>
//           <button className="login-button" onClick={addCounter}>
//             ADD Counter
//           </button>
//         </header>
//         <div className="counters">
//           {counters.map((counter) => (
//             <Counter key={counter.id} id={counter.id} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
