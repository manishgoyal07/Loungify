import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

function App() {

  // const apiKey = '3b68ce5089294af987ddfb71d6c62673';
  const apiKey = '780925323d234b2ab52ac095f1a170c0';

  const [category, setCategory] = useState("general");

  const [progress, setProgress] = useState(0);

  return (
    <>
      <NavBar setCategory={setCategory} />
      <LoadingBar
        height={3}
        color="#667eea"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <News pageSize={10} category={category} setProgress={setProgress} apiKey={apiKey} />
    </>
  );
}

export default App;
