import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import {Routes, Route,} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Introduction from './components/Introduction'
import Article from './pages/Article';
import Collective from './pages/Collective';
import About from './pages/About';
import './styles/GlobalStyle.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Introduction />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/collective/:id" element={<Collective />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<Error />} />
     </Routes>
    </main>
    <Footer />
    </div>

  );
}

export default App;
