
import './App.css';
import Search from './Search';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Display from './Display';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/search-results"> 
            <Display />
          </Route>
          <Route path="/"> 
            <Search />
          </Route>
        </Switch>

      
    </div>
    </Router>
    
  );
}

export default App;
