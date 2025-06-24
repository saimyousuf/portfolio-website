import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Skill from "./components/Skills/Skill";
import ThemeProvider from "./context/themeContext";
import ProgressBar from "./components/Skills/ProgressBar";
import SkillContainer from "./components/Skills/SkillContainer";
function App() {
  return (
    <>
      <ThemeProvider>
        {/* <Navbar /> */}
        <Hero />

        <SkillContainer />
        {/* <Skill /> */}
        {/* <ProgressBar /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
