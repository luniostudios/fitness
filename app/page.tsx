import Hero from "./components/home/Hero";
import Categories from "./components/home/Categories";
import Header from "./components/home/Header";
import Workouts from "./components/home/Workouts";
import Diet from "./components/home/Diet";
import Footer from "./components/home/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Categories />
        <Workouts />
        <Diet />
        <Footer />
      </div>
    </>
  )
}

export default App