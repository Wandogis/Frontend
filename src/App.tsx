import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { LoadingContext } from "./components/loading-context";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </LoadingContext.Provider>
  );
}

export default App;
