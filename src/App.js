import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Checkout from "./Checkout/Checkout";
import Signup from "./Components/Signup";
import Payment from "./Checkout/Payment";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <BrowserRouter>
        <Routes>
          <Route element={<Payment />} path="/paymentsucess" />

          <Route path="/cart" element={<Checkout />} />

          <Route element={<Login />} path="/login" />

          <Route exact element={<Signup />} path="/signup" />

          <Route
            exact
            element={<>
                <Header /> <Home />
              </> }path="/"/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
