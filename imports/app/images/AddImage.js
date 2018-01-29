import React from 'react';

import { Images } from '../../api/images';

class AddImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesToUpload: []
        }
    }
    
    onFileSelection = (e) => {
        e.preventDefault();

        const images = e.target.files;
        this.setState({
            imagesToUpload: Array.from(images)
        })
    }

    uploadFiles = (e) => {
        e.preventDefault();

        if (this.state.imagesToUpload.length > 0) {
            this.state.imagesToUpload.forEach(image => {
                if (image) {
                    let upload = Images.insert({
                        file: image,
                        streams: 'dynamic',
                        chunkSize: 'dynamic'
                    }, false);

                    this.setState({
                        uploading: upload,
                        inProgress: true
                    });

                    upload.on('start', () => {
                        console.log('starting');
                    });

                    upload.on('end', (err, uploadedFile) => {
                        console.log('on end fle: ', uploadedFile);
                    });

                    upload.on('uploaded', (err, uploadedFile) => {
                        console.log('uploaded file', uploadedFile);

                        this.refs.fileInput.value = '';

                        this.setState({
                            uploading: [],
                            progress: 0,
                            inProgress: false
                        });
                    });

                    upload.on('error', (error, fileObj) => {
                        console.log('Error during upload: ' + error);
                    });

                    upload.on('progress', (progress, fileObj) => {
                        console.log('Upload Percentage: ' + progress);
                        // Update our progress bar
                        this.setState({
                            progress: progress
                        })
                    });

                    upload.start();
                }
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.uploadFiles}>
                    <input onChange={this.onFileSelection} 
                           ref='fileInput' 
                           type='file' 
                           placeholder='Select the images' 
                           multiple />
                    <button>Upload images</button>
                </form>
            </div>
        );
    }
}

export { AddImage };