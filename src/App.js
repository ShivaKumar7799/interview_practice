import { useState } from 'react';
import './App.css';
import {configureStore} from "@reduxjs/toolkit"
import {Provider} from 'react-redux'
import FunctionalComponents from './Functional Components/FunctionalComponents';
import { createContext } from 'react';
import userSlice from './Functional Components/Redux/Redux Toolkit/Features/UserSlice';
import counterSlice  from './Functional Components/Redux/Redux Toolkit/Features/CounterSlice';
import CounterExample from './Class Based Components/Counter Example/CounterExample';
export const AppContext = createContext();

const store = configureStore({
  reducer : {
    user : userSlice,
    counter : counterSlice
  }
})

function App() {
  const [name, setName] = useState("Shiva");
  const contextValue = {
    name,
    setName
  }
  return (
        <Provider store = {store} >
          <AppContext.Provider value={contextValue} >
          <FunctionalComponents />
          {/* <CounterExample /> */}
          </AppContext.Provider>
        </Provider>
  );
}

export default App;
