import GameContextProvider from "./context/GameContext";
import "./App.css";
import GameBoard from "./components/GameBoard";
import GameFooter from "./components/GameFooter";
import GameHeader from "./components/GameHeader";

function App() {
  return (
    <GameContextProvider>
      <div className="app">
        <div>
          <GameHeader />
          <GameBoard />
        </div>
        <GameFooter />
      </div>
    </GameContextProvider>
  );
}

export default App;
