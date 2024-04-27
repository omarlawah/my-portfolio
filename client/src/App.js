import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Services from './Services';
import Projects from './Projects';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route index path='/'  Component={Home} />
          <Route path='/Services' Component={Services}/>
          <Route path='/Projects' Component={Projects}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
