import React from 'react';

class AddAlbum extends React.Component {
    addAlbum = (e) => {
        e.preventDefault();
        const name = this.refs.name.value.trim();
        Meteor.call('albums.insert', { name });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addAlbum}>
                    <input type='text' ref='name' placeholder='Name' />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export { AddAlbum };