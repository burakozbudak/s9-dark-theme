import { useDarkMode } from "./hooks/useDarkMode";
import clsx from "clsx";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import { data } from "./data.js";

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div
      className={clsx("text-center", { "dark-theme": darkMode })}
      data-testid="app"
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={data} />
    </div>
  );
};

export default App;
