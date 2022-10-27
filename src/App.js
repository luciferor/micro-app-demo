import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';//BrowserRouter历史路由模式  | HashRouter Hash模式，URL里带#号
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/">基座 Home</Link>
          <Link to="/about">基座 About</Link>
        </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
