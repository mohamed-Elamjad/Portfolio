import { useEffect, useState } from "react";
import "./Header.css";
const Header = () => {
  const [showModel, setShowModel] = useState(false);
  const [mode, setMode] =
   useState(localStorage.getItem("current_mode") ?? 'light');

  useEffect(() => {
    if (mode === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [mode]);
  return (
    <header className="flex">
      <div className="flex">
        <button
          className="menu icon-menu flex"
          
          onClick={() => {
            setShowModel(true);
          }}
        />
      </div>

      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="Mode flex"
        onClick={() => {
          //send value to local storage
          localStorage.setItem(
            "current_mode",
            mode === "dark" ? "light" : "dark"
          );
          // get value to local storage
          setMode(localStorage.getItem("current_mode"));
        }}
      >
        {mode ==='dark'?(<span className="icon-moon-o" />):
        (<span className='icon-sun' />)}
      </button>
      {showModel && (
        <div className="fixed">
          <ul className="Modal">
            <li>
              <button
                className="icon-cancel"
                onClick={() => setShowModel(false)}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
