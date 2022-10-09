import React from 'react';
import { Announcement, Categories, Footer, Navbar, Newsletter, Products, Slider} from "../components/index";

const Home = () => {

    return(
      
        <>
          <Announcement />
          <Navbar />
          <Slider />
          <Categories />
          <Products />
          <Newsletter/>
          <Footer/>
        </>
    );
}
export default Home;