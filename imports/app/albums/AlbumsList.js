import React from 'react';
import { Tracker } from 'meteor/tracker';

import { Albums } from '../../api/albums';

class AlbumsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        }
    }

    componentDidMount() {
        const albumsTracker = Tracker.autorun(() => {
            Meteor.subscribe('albums');
            const albums = Albums.find().fetch();
            this.setState({
                albums
            })
        })
    }

    removeAlbum = (id) => {
        Meteor.call('albums.remove', id)
    }
    
    render() {
        const albums = this.state.albums.map(album => {
            return <li key={album._id}>{album.name} <button onClick={this.removeAlbum.bind(this, album._id)}>X</button></li>
        });

        return (
            <div>
                <ul>
                    { albums }
                </ul>
            </div>
        );
    }
}

export { AlbumsList };