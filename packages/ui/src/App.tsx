import { useState } from "react";
import "./App.css";

import { SplitLayout } from "./lib/layouts";
import NavBar from "./lib/components/Navbar";

function App() {
  return (
    <SplitLayout className="bg-gray-100">
      <h1 className="text-2xl">Content goes here...</h1>
    </SplitLayout>
  );
}

export default App;
