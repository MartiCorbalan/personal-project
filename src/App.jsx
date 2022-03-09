import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Llista from "./components/llista/Llista";
import Main from "./components/main/Main";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          {Llista.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
