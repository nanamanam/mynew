import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
Meteor.startup(() => {
  var text='Hello Test123456';
  render(<div>{text}</div>
, document.getElementById('app'));

});

