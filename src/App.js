
import './App.css';


import { Switch, Route, useLocation} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import {AnimatePresence} from 'framer-motion';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';

const Section = styled.section`
  overflow-x:hidden;

`;


function App() {
let location = useLocation();

  return (
    <Section>
      <GlobalStyle></GlobalStyle>
      <AnimatePresence exitBeforeEnter >
        <Switch location={location} key={location.pathname}>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/services' component={Services}></Route>
      </Switch>
      </AnimatePresence>
      
      
      <h1>Appzinho</h1>
    </Section>
  );
}

export default App;
