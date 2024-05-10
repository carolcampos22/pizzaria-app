import './App.css';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import {Router} from './routes/router'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
