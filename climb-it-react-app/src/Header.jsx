import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <nav>
      <Link to={"/"}>
        <h1 className="logo">ClimbIt Habit Progression</h1>
      </Link>
    </nav>
  );
}
