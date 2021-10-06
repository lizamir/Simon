import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Header } from './cmps/Header';
import { About } from './pages/About';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route component={About} path="/about"></Route>
          <Route component={Home} path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
