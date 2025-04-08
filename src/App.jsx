import { useState } from 'react';
import './App.css';
import { Routing } from './routing/Routing';
import { AuthContextProvider } from "./context/auth/AuthContextProVider";
import { Provider } from 'react-redux';
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Routing />
      </AuthContextProvider>
    </Provider>
  )
}
export default App