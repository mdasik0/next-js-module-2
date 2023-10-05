import React from 'react';
import ImageCompo from '../Image/ImageCompo';
import Categories from './Category/Categories';

const Home = () => {
    return (
        <div>
          <Categories />
          <ImageCompo />  
        </div>
    );
};

export default Home;