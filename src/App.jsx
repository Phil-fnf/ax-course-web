import Hero from './components/Hero'
import Problem from './components/Problem'
import Background from './components/Background'
import Curriculum from './components/Curriculum'
import Outcomes from './components/Outcomes'
import Instructor from './components/Instructor'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Hero />
      <Problem />
      <Background />
      <Curriculum />
      <Outcomes />
      <Instructor />
      <FAQ />
      <Footer />
    </div>
  )
}
