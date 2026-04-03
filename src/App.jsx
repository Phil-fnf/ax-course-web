import Hero from './components/Hero'
import Problem from './components/Problem'
import CourseInfo from './components/CourseInfo'
import Curriculum from './components/Curriculum'
import Background from './components/Background'
import Outcomes from './components/Outcomes'
import Instructor from './components/Instructor'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Hero />
      <Problem />
      <CourseInfo />
      <Curriculum />
      <Background />
      <Outcomes />
      <Instructor />
      <FAQ />
      <Footer />
    </div>
  )
}
