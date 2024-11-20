import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import OlehSlyvkanych from "./components/OlehSlyvkanych";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-container">
      <OlehSlyvkanych />
    </div>
    </div>
  );
}

export default App;