import React from 'react';
import { Tracker } from 'meteor/tracker';

import { Images } from '../../api/images';

// TODO: Add categories to uploaded image
// find a way to connect to external mongo db
// Add download button
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
    
    render() {
        console.log(this.state.images);
        const images = this.state.images.map(image => {
            let link = Images.findOne({ _id: image._id}).link();

            return <li key={image._id}>
                {image.name}
                <img src={link} 
                     width='100px'/>
            </li>
        });

        return (
            <div>
                <ul>
                    {images}
                </ul>
            </div>
        );
    }
}

export { ImagesList };
