import React from 'react';
import NavBar from '../Component/Header/NavBar';
import Hero from '../Component/Hero/Hero';
import Service from '../Component/Service/Service';
import Education from '../Component/Education/Education';
import Skills from '../Component/Skills/Skills';
import Project from '../Component/Project/Project';
import Contact from '../Component/Contact/Contact';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Hero></Hero>
            <Service></Service>
            <Education></Education>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;