import { Route, Routes } from 'react-router-dom';
import { Login, NotFound, Search, Album, Favorites, Profile, ProfileEdit } from './pages';

function App() {
  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
        <Route path="/favorites" element={ <Favorites /> } />
        <Route path="/profile/edit" element={ <ProfileEdit /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
