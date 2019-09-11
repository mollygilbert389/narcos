import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import paths from './paths';

function App() {
  return (
    <div className="App">
      <Router>
        {paths.map(props => (
          <Route exact {...props} />
        ))}
      </Router>
    </div>
  );
}

export default App;
