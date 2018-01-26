import React from 'react';
import { CategoriesList } from './categories/CategoriesList';
import { AddCategory } from './categories/AddCategory';

class GalleryScreen extends React.Component {
    render() {
        return (
            <div>
                <AddCategory />
                <CategoriesList />
            </div>
        );
    }
}

export { GalleryScreen };
