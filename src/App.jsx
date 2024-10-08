import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import {Routes, Route,} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Article from './pages/Article';
import Collective from './pages/Collective';
import End from './pages/End';
import About from './pages/About';
import './styles/GlobalStyle.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/collective/:id" element={<Collective />} />
        <Route path="/end/:id" element={<End />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<Error />} />
     </Routes>
    </main>
    <Footer />
    </div>

  );
}

export default App;
