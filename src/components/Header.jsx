import logoImg from "../assets/logo.jpg";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button type="button">Cart (0)</button>
      </nav>
    </header>
  );
};

export default Header;
