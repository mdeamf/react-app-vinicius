import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store'
import Route  from './src/Routes/index'

const App = () => {
  return (  
    <Provider store={store}>  
      <Route/>
    </Provider>    
  );
};

export default App;
