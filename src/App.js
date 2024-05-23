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
          <Route index  path='/my-portfolio/' element={Home} />
          <Route path='/Services' element={Services}/>
          <Route path='/Projects' element={Projects}/>
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
  