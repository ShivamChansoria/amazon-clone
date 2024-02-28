import React from 'react';
import "./Payment.css";
import { useNavigate, useSearchParams } from 'react-router-dom';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
    const searchQuery= useSearchParams()[0];
    const order_id= (searchQuery.get('reference'));
    const navigate= useNavigate();

    // const order_id = searchQuery.get('reference');
    const handleHome = () =>{
        navigate('/');
    };
    return (
        <div className='container'>
            <div className='success-icon'><CreditScoreIcon /></div>
          <div className='payment-success'>
           <h3> Your payment has been done successfully and your order is now confirmed.
            With order_id:</h3>
            <p> "{order_id}" </p>
          </div>
          <button className='home-btn' onClick={handleHome}>Go back to Home</button>
        </div>
    );
}

export default Payment;
