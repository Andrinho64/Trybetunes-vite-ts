import { SongType } from '../types';

type SongTypeProps = {
  song: SongType;
};

export default function MusicCard({ song }: SongTypeProps) {
  return (
    <>
      <div>{ song.trackName }</div>
      <audio data-testid="audio-component" src={ song.previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        {' '}
        <code>audio</code>
        .
      </audio>
    </>
  );
}
