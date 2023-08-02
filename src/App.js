import "./App.css";
import MainPage from "./components/main-page/MainPage";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="App">
                <MainPage />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
