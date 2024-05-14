import './App.css';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Router } from './routes/router'
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Router />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
