import { Template } from 'meteor/templating';
import '../imports/ui/body.js';

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
