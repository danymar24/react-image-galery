import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Albums = new Mongo.Collection('albums');

if (Meteor.isServer) {
    Meteor.publish('albums', () => {
        return Albums.find();
    });
}

Meteor.methods({
    'albums.insert'(category) {
        Albums.insert(category);
    },
    'albums.remove'(id) {
        Albums.remove({ _id: id });
    }
});