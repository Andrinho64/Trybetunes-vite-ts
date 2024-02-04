import { Link } from 'react-router-dom';
import { AlbumType } from '../types';

type AlbumListProps = {
  artistName: string;
  albumList: AlbumType[];
};

export default function AlbumList({ artistName, albumList }: AlbumListProps) {
  return (
    <div data-testid="artist-name">
      <h1>
        { albumList.length > 0 ? `Resultado de álbuns de: ${artistName}`
          : 'Nenhum álbum foi encontrado' }
      </h1>
      {albumList.map(({ collectionId, collectionName }) => (
        <div key={ collectionId }>
          <Link
            data-testid={ `link-to-album-${collectionId}` }
            to={ `/album/${collectionId}` }
          >
            <h2>{`${collectionName}`}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
