/* import React, { useState } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';
import { AlbumType } from '../types';

export default function Search() {
  const [artistname, setArtistname] = useState('');
  const [loading, setLoading] = useState(false);

  const handleArtistNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArtistname(event.target.value);
  };

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    setLoading(true);
    const result: AlbumType[] = await searchAlbumsAPI(artistname);
    setArtistname('');
    setLoading(false);
  };

  const loginForm = () => {
    return (
      <form>
        <input
          value={ artistname }
          onChange={ handleArtistNameChange }
          type="text"
          data-testid="search-artist-input"
        />
        <button
          data-testid="search-artist-button"
          onClick={ handleClick }
          disabled={ artistname.length < 2 }
        >
          Pesquisar
        </button>
      </form>
    );
  };

  return (loading ? <Loading /> : loginForm());
} */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';
import { AlbumType } from '../types';

export default function Search() {
  const [artistname, setArtistname] = useState('');
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [searchedArtist, setSearchedArtist] = useState<string | null>(null);

  const handleArtistNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArtistname(event.target.value);
  };

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    setLoading(true);
    const result: AlbumType[] = await searchAlbumsAPI(artistname);
    setSearchedArtist(artistname);
    setAlbums(result);
    setArtistname('');
    setLoading(false);
  };

  const renderAlbums = () => {
    if (albums.length === 0) {
      return <p>Nenhum álbum foi encontrado.</p>;
    }
    return (
      <div>
        <p>
          Resultado de álbuns de:
          {searchedArtist}
        </p>
        <ul>
          {albums.map((album) => (
            <li key={ album.collectionId }>
              <Link
                to={ `/album/${album.collectionId}` }
                data-testid={ `link-to-album-${album.collectionId}` }
              >
                {album.collectionName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const loginForm = () => {
    return (
      <form>
        <input
          value={ artistname }
          onChange={ handleArtistNameChange }
          type="text"
          data-testid="search-artist-input"
        />
        <button
          data-testid="search-artist-button"
          onClick={ handleClick }
          disabled={ artistname.length < 2 }
        >
          Pesquisar
        </button>
      </form>
    );
  };

  return (
    <div>
      {loading ? <Loading /> : null}
      {searchedArtist && renderAlbums()}
      {!loading && albums.length === 0 && !searchedArtist && loginForm()}
    </div>
  );
}
