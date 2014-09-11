import Ember from 'ember';

var Router = Ember.Router.extend({
  location: HttpMockExampleENV.locationType
});

Router.map(function() {
});

export default Router;
