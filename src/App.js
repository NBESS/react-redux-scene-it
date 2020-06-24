import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movies from './components/Movies';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Movies} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
