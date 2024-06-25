import './App.css';
import Home from './pages/Home';
import {Routes, Route,} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <p>
          Bonjour
        </p>
       
      
      <main>
    <Routes>
        <Route path="/" element={<Home />} />  
     </Routes>
    </main>
    <Footer />
    </div>

  );
}

export default App;
