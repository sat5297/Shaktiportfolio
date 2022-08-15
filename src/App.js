import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Coding from './Coding';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/"> <Home/> <Coding/> </Route>
      </Switch>
    </div>
  );
}

export default App;
