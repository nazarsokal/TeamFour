import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import NazarNovosilets from "./components/NazarNovosilets";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-container">
      <NazarNovosilets />
    </div>
    </div>
  );
}

export default App;
