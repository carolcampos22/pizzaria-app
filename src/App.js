import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="text-3xl font-bold">Bem-vindo ao PizzaPalooza!</h1>
      <Footer />
    </div>
  );
}

export default App;
