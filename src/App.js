import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import GoodBye from './components/GoodBye';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <GoodBye/>
      <Footer></Footer>
    </div>
  );
}

export default App;
