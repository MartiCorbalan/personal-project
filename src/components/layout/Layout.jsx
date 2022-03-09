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
          {Llista.map((item) => (
            <li>
              <Link to={item.path}>{item.titol}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
