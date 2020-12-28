import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Img3 from '../images/sanha.jpg';
import {motion} from 'framer-motion';
import {animationThree} from '../animations/index'

const Services = () => {
    return (
        <motion.div
        initial='out'
        animate='end'
        exit='out'
        variants={animationThree}
>
            <Header></Header>
            <Hero image={Img3} title='Não temos fins lucrativos!' description='Todo dinheiro arrecadado é doado para instituições responsáveis pelos cuidados de aves ameaçadas de extinção!' button='Apoie a causa!'></Hero>
            <h1>ServicosCarai</h1>
        </motion.div>
    )
}

export default Services;
