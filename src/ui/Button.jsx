import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const className =
    "bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2  disabled:cursor-not-allowed sm:px-6 sm:py-4";

  const base =
    " text-sm bg-yellow-400 uppercase font-semibold text-stone-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2  disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " py-3 px-4 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md-py-2.5 text-sm",
    secondary:
      " text-sm hover:bg-stone-300 hover:text-stone-800  py-2 px-3 md:px-6 md:py-3.5 border-2 border-stone-300 uppercase font-semibold text-stone-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-300 focus:bg-yellow-300 focus:ring-offset-2 focus:text-stone-800  disabled:cursor-not-allowed ",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
