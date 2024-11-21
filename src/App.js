import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import OlehSlyvkanych from "./components/OlehSlyvkanych";
import OleksanrSmyk from "./components/OleksandrSmyk";
import NazarNovosilets from "./components/NazarNovosilets";
import NazarSok from "./components/NazarSok";
import KseniiaOlefir from "./components/Olefir_Kseniia";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <NazarNovosilets />
        <NazarSok />
        <KseniiaOlefir />
        <OleksanrSmyk />
        <OlehSlyvkanych />
      </div>
    </div>
  );
}

export default App;