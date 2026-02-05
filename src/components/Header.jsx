import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="site-header">
      <img src={logo} alt="Logo" className="site-logo" />

      <div>
        <h1 className="site-title">PawVision</h1>

        <p className="site-sub">Cat vs Dog Image Classifier</p>
      </div>
    </header>
  );
}

export default Header;