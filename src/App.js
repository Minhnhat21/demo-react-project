import logo from './logo.svg';
import './App.scss';
// import {useDispatch, useSelector} from 'react-redux';

import MyComponent from './components/MyComponent';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <MyComponent></MyComponent>
      </div>
    );
  }
}


// function App() {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCouter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

export default App;
