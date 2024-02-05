import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';
import { AlbumType, SongType } from '../types';
import AlbumList from '../components/AlbumList';
import MusicCard from './MusicCard';

export default function Album() {
  const [artistName, setArtistName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [albumList, setAlbumList] = useState<[...SongType[]]>([]);
  const [albumType, setAlbumType] = useState<AlbumType>();

  const params = useParams();
  const idAlbum = params.id;

  useEffect(() => {
    const handleParam = async () => {
      if (typeof idAlbum === 'string') {
        const result = await getMusics(idAlbum);
        const albumInfo = result.shift() as AlbumType;
        setAlbumType(albumInfo);
        setAlbumList(result as SongType[]);
        setLoading(false);
      }
    };
    handleParam();
  }, [idAlbum]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <p data-testid="artist-name">{ albumType?.artistName }</p>
      <p data-testid="album-name">{ albumType?.collectionName }</p>
      { albumList.map((PropsSong) => (
        <MusicCard song={ PropsSong } key={ PropsSong.trackId } />
      )) }
    </>
  );
}
