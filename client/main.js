import React from 'react';
import ReactDOM from 'react-dom';

import { GalleryScreen } from '../imports/app/GaleryScreen';

Meteor.startup(() => {
  ReactDOM.render(<GalleryScreen />, document.getElementById('app'));
});