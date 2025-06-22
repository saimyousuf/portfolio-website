import "./App.css";
import Heroo from "./components/heroo";
import Navbar from "./components/Navbar";
import ThemeProvider from "./context/themeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Heroo />
      </ThemeProvider>
    </>
  );
}

export default App;
