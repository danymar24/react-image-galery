import React from 'react';

class AddImage extends React.Component {

    onFileSelection = (e) => {
        Meteor.call('images.upload', e.target.files[0]);
    }

    render() {
        return (
            <div>
                <input onChange={this.onFileSelection} type='file' placeholder='Select the images' />
            </div>
        );
    }
}

export { AddImage };