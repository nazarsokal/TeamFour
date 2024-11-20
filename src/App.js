import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import NazarNovosilets from "./components/NazarNovosilets";
import NazarSok from "./components/NazarSok";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <NazarNovosilets />
        <NazarSok />
      </div>
    </div>
  );
}

export default App;
