import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConcertProviderWrapper } from './contexts/concert.context';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ConcertProviderWrapper>
    <Router>
      <App />
    </Router>
  </ConcertProviderWrapper>
)

