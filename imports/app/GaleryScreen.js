import React from 'react';
import { CategoriesList } from './categories/CategoriesList';
import { AddCategory } from './categories/AddCategory';
import { AddImage } from './images/AddImage';

class GalleryScreen extends React.Component {
    render() {
        return (
            <div>
                <AddImage />
                <AddCategory />
                <CategoriesList />
            </div>
        );
    }
}

export { GalleryScreen };
