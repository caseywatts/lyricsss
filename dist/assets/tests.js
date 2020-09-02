'use strict';

define("lyricsss/tests/integration/components/lyrics-card-test", ["ember-qunit"], function (_emberQunit) {
  "use strict";

  (0, _emberQunit.moduleForComponent)('lyrics-card', 'Integration | Component | lyrics card', {
    integration: true
  });
  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.render(Ember.HTMLBars.template(
    /*
      {{lyrics-card}}
    */
    {"id":"WI4gFMa1","block":"{\"symbols\":[],\"statements\":[[1,[34,0]]],\"hasEval\":false,\"upvars\":[\"lyrics-card\"]}","meta":{}}));
    assert.equal(this.$().text().trim(), ''); // Template block usage:

    this.render(Ember.HTMLBars.template(
    /*
      
        {{#lyrics-card}}
          template block text
        {{/lyrics-card}}
      
    */
    {"id":"36/SYX0a","block":"{\"symbols\":[],\"statements\":[[2,\"\\n\"],[6,[37,0],null,null,[[\"default\"],[{\"statements\":[[2,\"      template block text\\n\"]],\"parameters\":[]}]]],[2,\"  \"]],\"hasEval\":false,\"upvars\":[\"lyrics-card\"]}","meta":{}}));
    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define("lyricsss/tests/test-helper", ["lyricsss/app", "lyricsss/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("lyricsss/tests/unit/routes/application-test", ["ember-qunit"], function (_emberQunit) {
  "use strict";

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {// Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });
  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define("lyricsss/tests/unit/routes/lyrics-card-test", ["ember-qunit"], function (_emberQunit) {
  "use strict";

  (0, _emberQunit.moduleFor)('route:lyrics-card', 'Unit | Route | lyrics card', {// Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });
  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('lyricsss/config/environment', [], function() {
  var prefix = 'lyricsss';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('lyricsss/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
