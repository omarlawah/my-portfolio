import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route,Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Services from './Services';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/'   Component={Home} />
          <Route path='/Services' Component={Services}/>
          <Route path='/Projects' Component={Projects}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
  