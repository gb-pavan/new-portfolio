import Navbar from './components/Navbar'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact'

const  App = () => (
  
    <div className="App">
      
      <div> 
        <Navbar />
          <div>
            <Switch>
              
              <Route exact path="/" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/projects" component={Projects} />
        
            </Switch>

          </div>

        </div>
          
                  
             
    </div>
  
)

export default App;
