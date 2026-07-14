import Header from "./components/Header";
import Body from "./components/body";

import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Header />
        <Body />
      </div>
    </main>
  );
};

export default App;
