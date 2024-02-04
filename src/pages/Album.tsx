/* import React, { useState } from 'react';
import musicsAPI from '../services/musicsAPI';
import MusicCard from './MusicCard';
import Loading from './Loading';
import { AlbumType } from '../types';

export default function Album() { */
/* const [albumName, setAlbumName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleArtistNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumName(event.target.value);
  };

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    setLoading(true);
    const result: AlbumType[] = await musicsAPI(albumName);
    setAlbumName('');
    setLoading(false);
  };

  const nameOfArtist =
  const nameOfAlbum =

  const getMusics = () => {
    return (
      <form>
        <p
          data-testid="artist-name"
          {nameOfArtist}
        />
        <p
          data-testid="album-name"
          {nameOfAlbum}
        />
        <ul>

        </ul>
      </form>
    ); */
/*   };

  return (loading ? <Loading /> : getMusics());
}
 */

export default function Album() {
  return (
    <div />
  );
}
