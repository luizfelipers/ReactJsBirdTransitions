import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Img1 from '../images/arara.jpg';
import {motion} from 'framer-motion';
import {animationOne, transition} from '../animations/index'

const Home = () => {
    return (
        <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={transition}

        >
            <Header></Header>
            <Hero image ={Img1} title='Descubra os sons da natureza!' description='Os cantos dos pássaros num só lugar!' button='Explorar!'></Hero>
        </motion.div>
    )
}

export default Home;
