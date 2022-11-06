import "./App.css";
import GameBoard from "./components/GameBoard";
import GameFooter from "./components/GameFooter";
import GameHeader from "./components/GameHeader";

function App() {
  return (
    <div className="app">
      <div>
        <GameHeader />
        <GameBoard />
      </div>
      <GameFooter />
    </div>
  );
}

export default App;
