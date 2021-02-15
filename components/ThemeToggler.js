const ThemeToggler = ({ darkTheme, setDarkTheme }) => {
    function handleDarkThemeToggle(e) {
        setDarkTheme(e.target.checked);
    }

    return (
        <div>
            <input
                type="checkbox"
                checked={darkTheme}
                onChange={handleDarkThemeToggle}
                id="theme"
                name="theme"
                className="invisible"
            />
            <label
                htmlFor="theme"
                className="relative inline-block bg-purple-400 rounded-full w-10 h-7 cursor-pointer"
            >
                <span
                    className={`absolute top-1 left-1 w-5 h-5 bg-purple-900 rounded-full transform transition-transform ${
                        darkTheme ? "translate-x-3" : ""
                    }`}
                ></span>
            </label>
        </div>
    );
};

export default ThemeToggler;
