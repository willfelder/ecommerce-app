import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar  from '../components/Navbar';
import NewsLetter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';

function Home(){
    return(
        <>
          <Announcement />
          <Navbar />
          <Slider />
          <Categories />
          <Products />
          <NewsLetter/>
          <Footer/>
        </>
    );
}
export default Home;