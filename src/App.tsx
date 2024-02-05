import { Route, Routes } from 'react-router-dom';
import { Login, NotFound, Search, Album, Favorites, Profile, ProfileEdit,
  Layout } from './pages';

export default function App() {
  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/search" element={ <Search /> } />
          <Route path="/album/:id" element={ <Album /> } />
          <Route path="/favorites" element={ <Favorites /> } />
          <Route path="/profile/edit" element={ <ProfileEdit /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
        <Route index element={ <Login /> } />
      </Routes>
    </>
  );
}
