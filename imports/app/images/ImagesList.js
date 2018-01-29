import React from 'react';
import { Tracker } from 'meteor/tracker';

import { Images } from '../../api/images';

// TODO: Add categories to uploaded image
// Add thumbnails

class ImagesList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }
    
    componentDidMount = () => {
        const imagesTracker = Tracker.autorun(() => {
            Meteor.subscribe('images');
            const images = Images.find().fetch();
            this.setState({
                images
            });
        })
    }

    downloadImage = (link) => {
        window.open(link);
    }

    removeImage = (id) => {
        Meteor.call('images.remove', id);
    }
    
    render() {
        const images = this.state.images.map(image => {
            let link = Images.findOne({ _id: image._id}).link();

            return  <div className='image'
                         key={image._id}>
                        <img src={link} 
                            width='100%'/>
                        <div className='image-description'>
                            {image.name}
                        </div>
                        <div className='image-download'>
                            <a href = {link}
                            download = {image.name}>
                                Download
                            </a>
                        </div>
                        <div>
                            <span onClick={this.removeImage.bind(this, image._id)}>
                                Delete
                            </span>
                        </div>
                    </div>
        });

        return (
            <div>
                <div className='images-list'>
                    {images}
                </div>
            </div>
        );
    }
}

export { ImagesList };
