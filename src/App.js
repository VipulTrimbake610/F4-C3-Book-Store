import Navbar from "./Components/Navbar.js";
import Main from "./Components/Main1.js";
import { useState } from "react";

function App() {
  let [search,setSearch] = useState();
  return (
   <>
   <Navbar setSearch={setSearch}/>
   <Main search={search}/>
   </>
  );
}

export default App;
