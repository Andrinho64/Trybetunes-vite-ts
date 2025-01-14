import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';
import { AlbumType, SongType } from '../types';
import MusicCard from './MusicCard';
import Header from '../components/Header';

export default function Album() {
  const [loading, setLoading] = useState<boolean>(true);
  const [albumList, setAlbumList] = useState<[...SongType[]]>([]);
  const [albumType, setAlbumType] = useState<AlbumType>();

  const params = useParams();
  const idAlbum = params.id;

  useEffect(() => {
    const handleParam = async () => {
      if (typeof idAlbum === 'string') {
        const response = await getMusics(idAlbum);
        const result = [...response];
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
      <Header />
      <p data-testid="artist-name">{ albumType?.artistName }</p>
      <p data-testid="album-name">{ albumType?.collectionName }</p>
      { albumList.map((PropsSong) => (
        <MusicCard song={ PropsSong } key={ PropsSong.trackId } />
      )) }
    </>
  );
}
