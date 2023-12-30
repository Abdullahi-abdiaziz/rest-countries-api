import { React, useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "light"
  );

  useEffect(() => {
    theme === "light"
      ? document.body.classList.add("light")
      : document.body.classList.remove("light");
  }, [theme]);

  return (
    <div className="navbar">
      <h1 className="title">Where in the world?</h1>
      <div
        className="mode"
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          setTheme(localStorage.getItem("currentMode"));
        }}
      >
        <span
          className={theme === "light" ? `icon-moon-fill` : `icon-sun-fill`}
        ></span>
        {theme === "dark" ? <p>Light Mode</p> : <p>Dark Mode</p>}
      </div>
    </div>
  );
};

export default Navbar;
