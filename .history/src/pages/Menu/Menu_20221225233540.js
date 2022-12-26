import { Outlet, Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="./Inicio">Inicio</Link>
          </li>
          <li>
            <Link to="./Jogos">Jogos</Link>
          </li>
          <li>
            <a>Categorias</a>
              <Link to="./Acao">Ação</Link>
              <ul>Aventura</ul>
              <ul>Arcades</ul>
              <ul>Para a Familia</ul>
              <ul>Independetes</ul>
              <ul>Jogos de RPG</ul>
              <ul>Jogos Gratuitos</ul>
              <ul>Terror</ul>
              <ul>Suspence</ul>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Menu;