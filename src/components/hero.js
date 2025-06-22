import "../styles/hero.css";
export default function Hero() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-container-inner">
            <h1>Hi! I am Saim. 🙂👋</h1>
            <p>Software Engineer who builds stuff and makes it happen.</p>
            <a href="#" className="btn">
              Download Resume
            </a>
          </div>
        </div>
      </header>
      <section>
        <div className="centerContainer">
          <h2>Some random heading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
    </>
  );
}
