import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './body.html';

Template.body.helpers({
  tasks() {
    return Tasks.find({},{sort: {createdAt: -1}});
  },
});

Template.body.events({

  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    const user = Meteor.user().username || 'anon';
    // Insert a task into the collection
    Tasks.insert({
      text,
      user,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },
});
