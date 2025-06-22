import { useContext } from "react";
import darkTheme from "../styles/DarkTheme.module.css";
import lightTheme from "../styles/DarkTheme.module.css";
import { ThemeContext } from "../context/themeContext";
import profilepic from "../assets/profilepic.jpeg";
export default function Introduction() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const styles = theme === "light" ? lightTheme : darkTheme;
  return (
    <div className={styles.container}>
      <h1 className={styles.intro}>Hi, I'm a Software Engineer</h1>
      <img src={profilepic} alt="Profile" className={styles.image} />
    </div>
  );
}
