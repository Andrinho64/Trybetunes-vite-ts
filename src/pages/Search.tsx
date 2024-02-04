import React, { useState } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';
import { AlbumType } from '../types';
import AlbumList from '../components/AlbumList';

export default function Search() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [artistName, setArtistName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [albumList, setAlbumList] = useState<AlbumType[]>([]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    setLoading(true);
    const result = await searchAlbumsAPI(searchInput);
    setAlbumList(result);
    setArtistName(searchInput);
    setSearchInput('');
    setLoading(false);
  };

  const search = () => {
    return (
      <>
        <form>
          <input
            value={ searchInput }
            onChange={ handleSearchInputChange }
            type="text"
            data-testid="search-artist-input"
          />
          <button
            data-testid="search-artist-button"
            onClick={ handleClick }
            disabled={ searchInput.length < 2 }
          >
            Pesquisar
          </button>
        </form>
        <AlbumList artistName={ artistName } albumList={ albumList } />
      </>
    );
  };

  return (loading ? <Loading /> : search());
}
