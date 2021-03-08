import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (

<header className="row">
<h1 id="site-title" className="col-sm-4"><Link to="/">MIKE QUIGLEY</Link></h1>
<nav className="col-sm-8 text-right">
  <p><Link to="/">About</Link> | <Link to="/album-art">Album Art</Link> | <Link to="discog">Discography</Link> | <Link to="misc">Misc.</Link> | <Link to="posters">Posters</Link> |
    <Link to="technology">Technology</Link></p>
</nav>
</header>

);

export default NavBar;