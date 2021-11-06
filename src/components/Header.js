import {Link, useNavigate} from "react-router-dom"

function Header() {

    const navigate = useNavigate()

  return (
    <header>
      <h1>My Website</h1>
      <nav>
          <Link to="/"><div>home</div></Link>
          <div onClick={() => {navigate("/other")}}>other</div>
          <div onClick={() => {navigate("/param/cheese/bread")}}>Param</div>
      </nav>
    </header>
  );
}

export default Header;
