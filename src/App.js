import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import NazarSok from "./components/NazarSok";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-container" >
      <NazarSok />
      </div>
    </div>
  );
}

export default App;
