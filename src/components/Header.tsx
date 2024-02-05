import { NavLink, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';
import { UserType } from '../types';
import Loading from '../pages/Loading';

export default function Header() {
  const [user, setUser] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const result = async () => {
      setLoading(true);
      const data: UserType = await getUser();
      setUser(data.name);
      setLoading(false);
    };
    result();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <header data-testid="header-component">
      <Link to="/">Home</Link>
      <NavLink to="/search" data-testid="link-to-search">Search</NavLink>
      <NavLink to="/favorites" data-testid="link-to-favorites">Favorites</NavLink>
      <NavLink to="/profile" data-testid="link-to-profile">Profile</NavLink>
      <p data-testid="header-user-name">{ user }</p>
    </header>
  );
}
