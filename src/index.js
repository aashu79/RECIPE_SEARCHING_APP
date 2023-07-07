import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import { BrowserRouter as Router } from 'react-router-dom';

// Create a root element
const rootElement = document.getElementById('root');

// Render the App component into the root element
ReactDOM.render(
<Router>
     <App /> 
</Router>,
 rootElement);