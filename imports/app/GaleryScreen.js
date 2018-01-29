import React from 'react';
import { CategoriesList } from './categories/CategoriesList';
import { AddCategory } from './categories/AddCategory';
import { AddImage } from './images/AddImage';
import ImagesList from './images/ImagesList';

class GalleryScreen extends React.Component {
    render() {
        return (
            <div>
                <AddImage />
                <ImagesList />
                <AddCategory />
                <CategoriesList />
            </div>
        );
    }
}

export { GalleryScreen };
