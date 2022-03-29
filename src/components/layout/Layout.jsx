import Llista from "../llista/Llista";
import { Outlet, Link } from "react-router-dom";
import Main from "../main/Main";

export default function Layout() {
  return (
    <>
      <div className="App">
        <h1>Martí Corbalan Cruz</h1>
        <h4>Exercicis React</h4>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {Llista.map((item) => (
            <li className="links">
              <Link to={item.path}>{item.titol}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
