import React from 'react';
import NavBar from '../Component/Header/NavBar';
import Hero from '../Component/Hero/Hero';
import Service from '../Component/Service/Service';
import Education from '../Component/Education/Education';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Hero></Hero>
            <Service></Service>
            <Education></Education>
        </div>
    );
};

export default Home;