import React from 'react';
import NavBar from '../Component/Header/NavBar';
import Hero from '../Component/Hero/Hero';
import Service from '../Component/Service/Service';
import Education from '../Component/Education/Education';
import Skills from '../Component/Skills/Skills';
import Project from '../Component/Project/Project';
import Contact from '../Component/Contact/Contact';
import Footer from '../Component/Footer/Footer';
import Tool from '../Component/Tool/Tool';



const Home = () => {
    return (
        <div className='bg-[#05080E]'>
            <NavBar></NavBar>
            <Hero></Hero>
            <Service></Service>
            <Education></Education>
            <Skills></Skills>
            <Tool></Tool>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;