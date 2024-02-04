import React, { useState } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';
import { AlbumType } from '../types';
import AlbumList from '../components/AlbumList';

export default function Search() {
  const [artistName, setArtistName] = useState('');
  const [loading, setLoading] = useState(false);
  const [albumList, setAlbumList]: [AlbumType[], any] = useState([]);

  const handleArtistNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArtistName(event.target.value);
  };

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    setLoading(true);
    console.log(artistName);
    const result = await searchAlbumsAPI(artistName);
    setAlbumList(result);
    setArtistName('');
    setLoading(false);
  };

  const search = () => {
    return (
      <>
        <form>
          <input
            value={ artistName }
            onChange={ handleArtistNameChange }
            type="text"
            data-testid="search-artist-input"
          />
          <button
            data-testid="search-artist-button"
            onClick={ handleClick }
            disabled={ artistName.length < 2 }
          >
            Pesquisar
          </button>
        </form>
        <AlbumList albumList={ albumList } />
      </>
    );
  };

  return (loading ? <Loading /> : search());
}
