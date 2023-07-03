import "./App.css";
import AddAuthor from "./components/AddAuthor";
import Authors from "./components/Authors";
import AddBlog from "./components/AddBlog";
import Blogs from "./components/Blogs";

function App() {

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
