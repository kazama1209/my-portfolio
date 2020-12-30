import React from 'react'
import Container from '@material-ui/core/Container'

import Navbar from './components/Navbar'
import MyIcon from './components/MyIcon'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'

import ScrollUp from './utils/ScrollUp'

const App: React.FC = () => {
  
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Container fixed>
          <section>
            <MyIcon />
          </section>
          <section id='about'>
            <About />
          </section>
          <section id='skills'>
            <Skills />
          </section>
          <section id='works'>
            <Works />
          </section>
          <section id='contact'>
            <Contact />
          </section>
        </Container>
        <ScrollUp />
      </main>
    </>
  );
}

export default App;
