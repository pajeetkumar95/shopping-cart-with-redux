import React from 'react';
import Main from './Main';
import { Provider } from 'react-redux';
import Store from './Components/Store';

function App() {
  return (
    <>
    <Provider store={Store}>
     <Main/>
    </Provider>
    </>
  )
}

export default App