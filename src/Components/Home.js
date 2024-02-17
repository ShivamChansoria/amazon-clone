import React from 'react';
import Product from './Product';
import "./Home.css";
import { useStataValue } from '../Providers/StateProvider';



const Home = () => {

    return (
        <div className='home-page'>
            <div className='home-image'>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='home-image' />
            </div>
            <div className='home-list'>
                <Product 
                image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}
                id={11422}
                title={"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback "}
                rating={4}
                price={1182} />

                <Product 
                image={"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"}
                id={11423}
                title={"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl "}
                rating={5}
                price={239} />
                
                <Product 
                image={"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}
                id={11424}
                title={"Fitbit Smart Watch Full Digital UHD Amoled with Heart Rate"}
                rating={3}
                price={540} />
                
                <Product 
                image={"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}
                id={11425}
                title={"New Amazon Echo Prime Ultra Clear Bluetooth Smart Speaker "}
                rating={4}
                price={622} />
            </div>
        </div>
    );
}

export default Home;
