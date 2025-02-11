import React from "react";

import './App.css';
import { AppProvider } from './context/ContextComments';
import Comment from './components/Comment';
import Delete from './components/DeleteComment';
function App() {

  return (
    <React.StrictMode>
      <AppProvider>
        <Comment />
        <Delete />
      </AppProvider>
    </React.StrictMode>

  )
}

export default App
