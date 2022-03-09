import Llista from "../llista/Llista";
import { Outlet, Link } from "react-router-dom";
export default function Main() {
  return (
    <>
      <div className="contenedor1">
        <br />
        <div className="contenedor-articulo">
          {Llista.map((item) => (
            <div className="project">
              <Link to={item.path}>{item.titol}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
