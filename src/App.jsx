import About from "./component/About.jsx"
import Contact from "./component/Contact.jsx"
import Features from "./component/Features.jsx"
import Footer from "./component/Footer.jsx"
import Hero from "./component/Hero.jsx"
import Navbar from "./component/Navbar.jsx"
import Story from "./component/Story.jsx"


function App() {
  

  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
