import clsx from "clsx";

const Navbar = ({ darkMode, setDarkMode }) => {
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar items-center border-b border-gray-300 flex h-18 justify-between px-[3%] w-full">
      <h1 className="text-3xl">Kripto İzleyici</h1>
      <div
        className="bg-orange-200 hover:bg-amber-200 rounded-full border-2 border-amber-700 h-6.5 relative w-11 cursor-pointer transition-colors"
        onClick={toggleMode}
        data-testid="toggle-darkMode"
      >
        <div
          className={clsx(
            "bg-amber-700 rounded-full left-0.5 top-0.5 absolute transition-all size-4.5",
            darkMode && "left-5"
          )}
        />
      </div>
    </nav>
  );
};

export default Navbar;
