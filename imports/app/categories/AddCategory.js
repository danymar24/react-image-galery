import React from 'react';

class AddCategory extends React.Component {
    addCategory = (e) => {
        e.preventDefault();
        const name = this.refs.name.value.trim();
        Meteor.call('categories.insert', { name });
    }

    render() {
        return (
            <form onSubmit={this.addCategory}>
                <input type='text' ref='name' placeholder='Name' />
                <button>Add</button>
            </form>
        );
    }
}

export { AddCategory };