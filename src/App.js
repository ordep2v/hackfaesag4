import React from 'react';
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router} from 'react-router-dom'

import { Routes } from "./routes/routes";


function App() {
  return(
    <ThemeProvider>
      <CssBaseline /> 
        <Router>
          <Routes /> 
        </Router>
    </ThemeProvider>
  )
}

export default App; 


