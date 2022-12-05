import { useState } from "react";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="bg-white">
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;
