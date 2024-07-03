import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import {Routes, Route,} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <Header />
       
      <main>
    <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/article/:id" element={<Article />} />
        <Route path="*" element={<Error />} />
     </Routes>
    </main>
    <Footer />
    </div>

  );
}

export default App;
