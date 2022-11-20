import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <Link class="navbar-brand" to="/">Be Grateful</Link>
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">Share</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/creator">Creator</Link>
          </li>
        </ul>
      </div>
    </nav>

    <Outlet />
    </>
  )
};

export default Layout;