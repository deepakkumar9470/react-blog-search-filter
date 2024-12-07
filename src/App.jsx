import Home from './components/Home'
import Hero from './components/Hero'
// import SearchBar from './components/SearchBar'

function App() {
 
  return (
    <div className="relative z-0 bg-primary p-8 md:p-10 lg:p-20">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Hero/>
      <Home/>
    </div>
</div>
  )
}

export default App
