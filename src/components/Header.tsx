import { Link, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
      </header>
      <Outlet />
    </>
  );
}
