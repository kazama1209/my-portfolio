import React from 'react'
import Container from '@material-ui/core/Container'

import Header from './components/Header'
import MyAvatar from './components/MyAvatar'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'

import ScrollUp from './utils/ScrollUp'

const App: React.FC = () => {
  
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container fixed>
          <section>
            <MyAvatar />
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
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
