// import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart/Cart';
// import Step from "./components/Step/Step";
import Step from "./components/Step/Step";


function App() {
  return (
    <div className="App">
      <main className="main_wrapper">
        <div className='main_container'>
          <Step />
          <Cart />
        </div>
      </main>
    </div>
  );
}

export default App;
