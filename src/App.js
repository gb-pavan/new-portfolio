import Navbar from './components/Navbar';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

const App = () => (
  <div className="App">
    <Navbar />
    <div className="content">
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </div>
  </div>
);

export default App;
