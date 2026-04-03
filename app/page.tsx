import Hero from "./components/home/Hero";
import Categories from "./components/home/Categories";
import Header from "./components/home/Header";
import Workouts from "./components/home/Workouts";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Categories />
        <Workouts />
      </div>
    </>
  )
}

export default App