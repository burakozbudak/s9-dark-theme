import { useState } from "react";
import clsx from "clsx";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import { data } from "./data.js";

const App = () => {
  const [geceModu, setGeceModu] = useState(false);

  return (
    <div className={clsx("text-center")} data-testid="app">
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
      <Charts coinData={data} />
    </div>
  );
};

export default App;
