import "../styles/hero.css";
export default function Hero() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-container-inner">
            <h1>Hi! I am Saim. 🙂👋</h1>
            <p>Software Engineer who builds stuff and makes it happen.</p>
            <div className="btn-container">
              <a href="/Md_Saim_Yousuf_Resume.pdf" className="btn" download>
                📄 Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/mdsaimyousuf/"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                🤝 Connect with me
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
