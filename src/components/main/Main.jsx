import Llista from "../llista/Llista";
import { Outlet, Link } from "react-router-dom";
export default function Main() {
  return (
    <>
      <div className="contenedor1">
        
        <div className="contenedor-articulo">
          {Llista.map((item) => (
            <div className="project">
              {/* <img src="login2.png" alt="" className="login_img"/>*/}
              <Link to={item.path}>{item.titol}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
