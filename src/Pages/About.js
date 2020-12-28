import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Image from '../images/papagaio.jpg';
import {motion} from 'framer-motion';
import {animationTwo} from '../animations/index';

const About = () => {
    return (
        <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animationTwo}


        >
            <Header></Header>
            <Hero image={Image} title='Nosso intuito é divulgar as belezas sonoras da nossa fauna!' description='Uma forma de conscientização sobre a preservação dos nossos animais.' button='Apoie a causa!'>
                
            </Hero>
            <h1>About </h1>
        </motion.div
        
        >
    )
}

export default About;
