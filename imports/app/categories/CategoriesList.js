import React from 'react';
import { Tracker } from 'meteor/tracker';

import { Categories } from '../../api/categories';

class CategoriesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }
    

    componentDidMount() {
        const categoriesTracker = Tracker.autorun(() => {
            Meteor.subscribe('categories');
            const categories = Categories.find().fetch();
            this.setState({
                categories
            })
        })
    }
    
    render() {
        const categories = this.state.categories.map(category => {
            return <li key={category._id}>{category.name}</li>
        });

        return (
            <div>
                <ul>
                    { categories }
                </ul>
            </div>
        );
    }
}

export { CategoriesList };