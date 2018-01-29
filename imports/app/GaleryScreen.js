import React from 'react';
import { AlbumsList } from './albums/AlbumsList';
import { AddAlbum } from './albums/AddAlbum';
import { AddImage } from './images/AddImage';
import { ImagesList } from './images/ImagesList';

class GalleryScreen extends React.Component {
    render() {
        return (
            <div>
                <div className='add-image'>
                    <AddImage />
                    <AddAlbum />
                    <AlbumsList />
                </div>
                <ImagesList />
            </div>
        );
    }
}

export { GalleryScreen };
