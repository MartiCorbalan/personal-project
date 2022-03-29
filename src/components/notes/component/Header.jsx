import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          /* como le pasamos el set en Notes, 
            con el hook ya podemos acceder al valor inicial 
            que en este caso es false y lo pasamos a true */
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        Dark Mode
      </button>
    </div>
  );
};

export default Header;
