import "./App.css";
import Home from "./pages/Home";
import Canvas from "./canvas";
import Customizer from "./pages/Customizer";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

// Link: https://www.youtube.com/watch?v=ZqEa8fTxypQ
// Time: 1:09:10
export default App;
