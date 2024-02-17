import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStataValue } from '../Providers/StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../Providers/reducer';

const Subtotal = () => {
     const history= useHistory(); 
     const [{ basket }, dispatch ]= useStataValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat renderText={(value) => (
                <p> Subtotal ({basket.length} item) <strong> {value} </strong></p>
               )}
               decimalScale={2}
               value={getBasketTotal(basket)}
               displayType={"text"}
               thousandSeparator={true}
               prefix={'₹'} 
            />


        </div>
    );
}

export default Subtotal;
