import React from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import Products from '../../components/Products/Products';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner/>
            <Products/>
        </div>
    );
};

export default Home;