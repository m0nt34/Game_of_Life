import Board from "./components/Board";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="flex flex-col gap-5 items-center justify-center w-fit h-full">
        <header className="flex w-full text-white justify-center text-5xl font-semibold">
          Conway’s Game of Life
        </header>
        <Board />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
