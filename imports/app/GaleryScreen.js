import React from 'react';
import { CategoriesList } from './categories/CategoriesList';
import { AddCategory } from './categories/AddCategory';
import { AddImage } from './images/AddImage';
import { ImagesList } from './images/ImagesList';

class GalleryScreen extends React.Component {
    render() {
        return (
            <div>
                <div className='add-image'>
                    <AddImage />
                    <AddCategory />
                    <CategoriesList />
                </div>
                <ImagesList />
            </div>
        );
    }
}

export { GalleryScreen };
