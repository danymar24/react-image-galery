import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Categories = new Mongo.Collection('categories');

if (Meteor.isServer) {
    Meteor.publish('categories', () => {
        return Categories.find();
    });
}

Meteor.methods({
    'categories.insert'(category) {
        Categories.insert(category);
    },
    'categories.remove'(id) {
        Categories.remove({ _id: id });
    }
});