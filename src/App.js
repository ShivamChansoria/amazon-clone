import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Checkout from './Checkout/Checkout';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
     <Route path="/cart" >
      <Checkout />
     </Route>

      <Route path="/login" >
        <Login />
      </Route>

      <Route exact path="/" >
          <Header />
          <Home />
          </Route>

          </BrowserRouter>
    </div>
  );
}

export default App;
