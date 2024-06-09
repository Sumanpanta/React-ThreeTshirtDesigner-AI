import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
import Canvas from "./canvas"


function App() {
  return (
    <main className="app transition-all ease-in">
      {/* within here we render, home, canvas and customizer */}
      <Home/>
      <Canvas/>
      <Customizer/>
      {/* <h1 className="head-text"> Tshirt Designer using Three Js</h1> */}
          
    </main>

  )
}

export default App
