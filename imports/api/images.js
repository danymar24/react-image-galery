import { FilesCollection } from 'meteor/ostrio:files';

export const Images = new FilesCollection({
    collectionName: 'images',
    storagePath: 'imports/uploads/images',
    allowClientCode: false,
    onBeforeUpload(file) {
        if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
            return true;
        } else {
            return 'Please upload image, with size equal or less than 10MB';
        }
    }
});

Meteor.methods({
    'images.upload'(image) {
        Images.insert({
            file: image,
            streams: 'dynamic',
            chunkSize: 'dynamic'
        }, false);

    }
})