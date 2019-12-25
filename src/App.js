import React from 'react';
import './App.css';
import Countries from './countries/Countries';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Countries />
      </div>
    </Provider>
  );
}

export default App;
