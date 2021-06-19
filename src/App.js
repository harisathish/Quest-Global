import './App.css';
import Register from './components/Register';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Payment from './components/Payment';
import Edit from './components/Edit';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navigation /> */}
        <Switch>
          <Route exact path='/' component={Register} />
          <Route exact path='/payment' component={Payment} />
          <Route exact path='/edit' component={Edit} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
