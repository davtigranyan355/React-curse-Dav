import { useState } from 'react';
import './App.css';
import { Routing } from './routing/Routing';
import { AuthContextProvider } from "./context/auth/AuthContextProVider";

function App() {
  return (
    <AuthContextProvider>
      <Routing />
    </AuthContextProvider>
  )
}
export default App