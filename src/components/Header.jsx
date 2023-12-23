import { useState } from "react";

export const Header = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const switchDarkMode = () => {
        setDarkMode(!darkMode);
    }

    const darkModeClass = `${darkMode ? "dark" : "light"}`;

    return (
        <div className={darkModeClass}>
            <header>
                <h1 className="bg-red-400 dark:bg-blue-900 dark:text-white">
                    {darkMode ? "DARK" : "LIGHT"}
                </h1>
                <button onClick={() => { switchDarkMode() }}>{darkMode ? "LIGHT" : "DARK"}</button>
            </header>
            {children}
        </div>
    )
}