import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddAuthor from "./components/AddAuthor";
import Authors from "./components/Authors";
import AddBlog from "./components/AddBlog";
import Blogs from "./components/Blogs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AddAuthor />
      <Authors />

      <AddBlog />
      <Blogs />
    </>
  );
}

export default App;
