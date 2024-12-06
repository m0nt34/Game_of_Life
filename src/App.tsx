import Board from "./components/Board";
import Buttons from "./components/Buttons";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="flex flex-col gap-5 sm850:gap-3 sm650:gap-2 sm450:gap-1 items-center justify-center w-fit h-full px-[25px] sm450:px-[15px]">
        <Header />
        <Board />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
