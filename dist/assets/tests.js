define('lyricsss/tests/app.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - app.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jscs.\ndisallowDirectPropertyAccess: Avoid accessing Ember.Application directly at app.js :\n     8 |Ember.MODEL_FACTORY_INJECTIONS = true;\n     9 |\n    10 |App = Ember.Application.extend({\n-----------------------^\n    11 |  modulePrefix: config.modulePrefix,\n    12 |  podModulePrefix: config.podModulePrefix,');
  });
});
define('lyricsss/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('lyricsss/tests/components/splash-page.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - components/splash-page.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/splash-page.js should pass jscs.\ndisallowDirectPropertyAccess: Avoid accessing Ember.Component directly at components/splash-page.js :\n     1 |import Ember from \'ember\';\n     2 |\n     3 |export default Ember.Component.extend({\n-------------------------------^\n     4 |});\n     5 |');
  });
});
define('lyricsss/tests/components/splash-page.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/splash-page.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/splash-page.js should pass jshint.');
  });
});
define('lyricsss/tests/components/team-component.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - components/team-component.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/team-component.js should pass jscs.\ndisallowDirectPropertyAccess: Avoid accessing Ember.Component directly at components/team-component.js :\n     1 |import Ember from \'ember\';\n     2 |\n     3 |export default Ember.Component.extend({\n-------------------------------^\n     4 |  teams: Ember.inject.service(\'team-service\'),\n     5 |  timer: Ember.inject.service(\'timer-service\'),\ndisallowDirectPropertyAccess: Avoid accessing Ember.inject directly at components/team-component.js :\n     2 |\n     3 |export default Ember.Component.extend({\n     4 |  teams: Ember.inject.service(\'team-service\'),\n-----------------------^\n     5 |  timer: Ember.inject.service(\'timer-service\'),\n     6 |  words: Ember.inject.service(\'word-service\'),\ndisallowDirectPropertyAccess: Avoid accessing Ember.inject directly at components/team-component.js :\n     3 |export default Ember.Component.extend({\n     4 |  teams: Ember.inject.service(\'team-service\'),\n     5 |  timer: Ember.inject.service(\'timer-service\'),\n-----------------------^\n     6 |  words: Ember.inject.service(\'word-service\'),\n     7 |  actions: {\ndisallowDirectPropertyAccess: Avoid accessing Ember.inject directly at components/team-component.js :\n     4 |  teams: Ember.inject.service(\'team-service\'),\n     5 |  timer: Ember.inject.service(\'timer-service\'),\n     6 |  words: Ember.inject.service(\'word-service\'),\n-----------------------^\n     7 |  actions: {\n     8 |    correctAnswer() {');
  });
});
define('lyricsss/tests/components/team-component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/team-component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/team-component.js should pass jshint.');
  });
});
define('lyricsss/tests/components/timer-component.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - components/timer-component.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/timer-component.js should pass jscs.\ndisallowDirectPropertyAccess: Avoid accessing Ember.Component directly at components/timer-component.js :\n     1 |import Ember from \'ember\';\n     2 |\n     3 |export default Ember.Component.extend({\n-------------------------------^\n     4 |  timer: Ember.inject.service(\'timer-service\'),\n     5 |  actions: {\ndisallowDirectPropertyAccess: Avoid accessing Ember.inject directly at components/timer-component.js :\n     2 |\n     3 |export default Ember.Component.extend({\n     4 |  timer: Ember.inject.service(\'timer-service\'),\n-----------------------^\n     5 |  actions: {\n     6 |    resetTimer() {');
  });
});
define('lyricsss/tests/components/timer-component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/timer-component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/timer-component.js should pass jshint.');
  });
});
define('lyricsss/tests/components/top-layout.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - components/top-layout.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/top-layout.js should pass jscs.\ndisallowDirectPropertyAccess: Avoid accessing Ember.Component directly at components/top-layout.js :\n     1 |import Ember from \'ember\';\n     2 |\n     3 |export default Ember.Component.extend({\n-------------------------------^\n     4 |  teams: Ember.inject.service(\'team-service\'),\n     5 |  timer: Ember.inject.service(\'timer-service\'),\ndisallowDirectPropertyAccess: Avoid accessing Ember.inject directly at components/top-layout.js :\n     2 |\n     3 |export default Ember.Component.extend({\n     4 |  teams: Ember.inject.service(\'team-service\'),\n-----------------------^\n     5 |  timer: Ember.inject.service(\'timer-service\'),\n     6 |  words: Ember.inject.service(\'word-service\'),\ndisallowDirectPropertyAccess: Avoid accessing Ember.inject directly at components/top-layout.js :\n     3 |export default Ember.Component.extend({\n     4 |  teams: Ember.inject.service(\'team-service\'),\n     5 |  timer: Ember.inject.service(\'timer-service\'),\n-----------------------^\n     6 |  words: Ember.inject.service(\'word-service\'),\n     7 |  actions: {\ndisallowDirectPropertyAccess: Avoid accessing Ember.inject directly at components/top-layout.js :\n     4 |  teams: Ember.inject.service(\'team-service\'),\n     5 |  timer: Ember.inject.service(\'timer-service\'),\n     6 |  words: Ember.inject.service(\'word-service\'),\n-----------------------^\n     7 |  actions: {\n     8 |    nextWord() {');
  });
});
define('lyricsss/tests/components/top-layout.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/top-layout.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/top-layout.js should pass jshint.');
  });
});
define('lyricsss/tests/components/word-history.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - components/word-history.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/word-history.js should pass jscs.\ndisallowDirectPropertyAccess: Avoid accessing Ember.Component directly at components/word-history.js :\n     1 |import Ember from \'ember\';\n     2 |\n     3 |export default Ember.Component.extend({\n-------------------------------^\n     4 |  words: Ember.inject.service(\'word-service\'),\n     5 |});\ndisallowDirectPropertyAccess: Avoid accessing Ember.inject directly at components/word-history.js :\n     2 |\n     3 |export default Ember.Component.extend({\n     4 |  words: Ember.inject.service(\'word-service\'),\n-----------------------^\n     5 |});\n     6 |\ndisallowTrailingComma: Extra comma following the final element of an array or object literal at components/word-history.js :\n     2 |\n     3 |export default Ember.Component.extend({\n     4 |  words: Ember.inject.service(\'word-service\'),\n-----------------------------------------------------^\n     5 |});\n     6 |');
  });
});
define('lyricsss/tests/components/word-history.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/word-history.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/word-history.js should pass jshint.');
  });
});
define('lyricsss/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('lyricsss/tests/helpers/destroy-app.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - helpers/destroy-app.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/destroy-app.js should pass jscs.\ndisallowDirectPropertyAccess: Avoid accessing Ember.run directly at helpers/destroy-app.js :\n     2 |\n     3 |export default function destroyApp(application) {\n     4 |  Ember.run(application, \'destroy\');\n---------------^\n     5 |}\n     6 |');
  });
});
define('lyricsss/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('lyricsss/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'lyricsss/tests/helpers/start-app', 'lyricsss/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _lyricsssTestsHelpersStartApp, _lyricsssTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _lyricsssTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _lyricsssTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('lyricsss/tests/helpers/module-for-acceptance.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - helpers/module-for-acceptance.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/module-for-acceptance.js should pass jscs.\nrequireSpread: Illegal use of apply method. Use the spread operator instead at helpers/module-for-acceptance.js :\n    12 |\n    13 |      if (options.beforeEach) {\n    14 |        return options.beforeEach.apply(this, arguments);\n---------------------------------------------^\n    15 |      }\n    16 |    },\nrequireSpread: Illegal use of apply method. Use the spread operator instead at helpers/module-for-acceptance.js :\n    17 |\n    18 |    afterEach() {\n    19 |      let afterEach = options.afterEach && options.afterEach.apply(this, arguments);\n------------------------------------------------------------------------^\n    20 |      return Promise.resolve(afterEach).then(() => destroyApp(this.application));\n    21 |    }');
  });
});
define('lyricsss/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('lyricsss/tests/helpers/resolver', ['exports', 'lyricsss/resolver', 'lyricsss/config/environment'], function (exports, _lyricsssResolver, _lyricsssConfigEnvironment) {

  var resolver = _lyricsssResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _lyricsssConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _lyricsssConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('lyricsss/tests/helpers/resolver.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - helpers/resolver.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jscs.');
  });
});
define('lyricsss/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('lyricsss/tests/helpers/start-app', ['exports', 'ember', 'lyricsss/app', 'lyricsss/config/environment'], function (exports, _ember, _lyricsssApp, _lyricsssConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _lyricsssConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _lyricsssApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('lyricsss/tests/helpers/start-app.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - helpers/start-app.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/start-app.js should pass jscs.\ndisallowDirectPropertyAccess: Avoid accessing Ember.merge directly at helpers/start-app.js :\n     6 |  let application;\n     7 |\n     8 |  let attributes = Ember.merge({}, config.APP);\n---------------------------------^\n     9 |  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n    10 |\ndisallowDirectPropertyAccess: Avoid accessing Ember.merge directly at helpers/start-app.js :\n     7 |\n     8 |  let attributes = Ember.merge({}, config.APP);\n     9 |  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n-----------------------------^\n    10 |\n    11 |  Ember.run(() => {\ndisallowDirectPropertyAccess: Avoid accessing Ember.run directly at helpers/start-app.js :\n     9 |  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n    10 |\n    11 |  Ember.run(() => {\n---------------^\n    12 |    application = Application.create(attributes);\n    13 |    application.setupForTesting();');
  });
});
define('lyricsss/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('lyricsss/tests/integration/components/splash-page-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('splash-page', 'Integration | Component | splash page', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'splash-page', ['loc', [null, [1, 0], [1, 15]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'splash-page', [], [], 0, null, ['loc', [null, [2, 4], [4, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('lyricsss/tests/integration/components/splash-page-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - integration/components/splash-page-test.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/splash-page-test.js should pass jscs.');
  });
});
define('lyricsss/tests/integration/components/splash-page-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/splash-page-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/splash-page-test.js should pass jshint.');
  });
});
define('lyricsss/tests/integration/components/team-component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('team-component', 'Integration | Component | teams display control', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 25
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'teams-display-control', ['loc', [null, [1, 0], [1, 25]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'teams-display-control', [], [], 0, null, ['loc', [null, [2, 4], [4, 30]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('lyricsss/tests/integration/components/team-component-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - integration/components/team-component-test.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/team-component-test.js should pass jscs.');
  });
});
define('lyricsss/tests/integration/components/team-component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/team-component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/team-component-test.js should pass jshint.');
  });
});
define('lyricsss/tests/integration/components/timer-component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('timer-component', 'Integration | Component | timer display control', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 25
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'timer-display-control', ['loc', [null, [1, 0], [1, 25]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'timer-display-control', [], [], 0, null, ['loc', [null, [2, 4], [4, 30]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('lyricsss/tests/integration/components/timer-component-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - integration/components/timer-component-test.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/timer-component-test.js should pass jscs.');
  });
});
define('lyricsss/tests/integration/components/timer-component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/timer-component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/timer-component-test.js should pass jshint.');
  });
});
define('lyricsss/tests/integration/components/top-layout-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('top-layout', 'Integration | Component | top layout', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'top-layout', ['loc', [null, [1, 0], [1, 14]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'top-layout', [], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('lyricsss/tests/integration/components/top-layout-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - integration/components/top-layout-test.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/top-layout-test.js should pass jscs.');
  });
});
define('lyricsss/tests/integration/components/top-layout-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/top-layout-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/top-layout-test.js should pass jshint.');
  });
});
define('lyricsss/tests/integration/components/word-history-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('word-history', 'Integration | Component | word history view controller', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 32
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'word-history-view-controller', ['loc', [null, [1, 0], [1, 32]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'word-history-view-controller', [], [], 0, null, ['loc', [null, [2, 4], [4, 37]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('lyricsss/tests/integration/components/word-history-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - integration/components/word-history-test.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/word-history-test.js should pass jscs.');
  });
});
define('lyricsss/tests/integration/components/word-history-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/word-history-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/word-history-test.js should pass jshint.');
  });
});
define('lyricsss/tests/models/past-word.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - models/past-word.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/past-word.js should pass jscs.\ndisallowDirectPropertyAccess: Avoid accessing Ember.Object directly at models/past-word.js :\n     2 |\n     3 |// Data structure containing information about each word tried\n     4 |export default Ember.Object.extend({\n-----------------------------^\n     5 |  // boolean\n     6 |  answerCorrect: null,\ndisallowDirectPropertyAccess: Avoid accessing Ember.computed directly at models/past-word.js :\n    15 |  // string\n    16 |  word: null,\n    17 |  correctnessIcon: Ember.computed(\'answerCorrect\', function() {\n----------------------------------^\n    18 |    if (this.get(\'answerCorrect\') === true) {\n    19 |      return this.get(\'icons.correct\');');
  });
});
define('lyricsss/tests/models/past-word.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/past-word.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/past-word.js should pass jshint.');
  });
});
define('lyricsss/tests/resolver.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - resolver.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jscs.');
  });
});
define('lyricsss/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('lyricsss/tests/router.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - router.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jscs.\ndisallowDirectPropertyAccess: Avoid accessing Ember.Router directly at router.js :\n     2 |import config from \'./config/environment\';\n     3 |\n     4 |const Router = Ember.Router.extend({\n-----------------------------^\n     5 |  location: config.locationType\n     6 |});');
  });
});
define('lyricsss/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('lyricsss/tests/routes/main.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - routes/main.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/main.js should pass jscs.\ndisallowDirectPropertyAccess: Avoid accessing Ember.Route directly at routes/main.js :\n     1 |import Ember from \'ember\';\n     2 |\n     3 |export default Ember.Route.extend({\n-----------------------------^\n     4 |  model() {\n     5 |    return Ember.$.getJSON(\"data/752MostCommonLyricWordsInDictionary.json\");\ndisallowDirectPropertyAccess: Avoid accessing Ember.$ directly at routes/main.js :\n     3 |export default Ember.Route.extend({\n     4 |  model() {\n     5 |    return Ember.$.getJSON(\"data/752MostCommonLyricWordsInDictionary.json\");\n-----------------------^\n     6 |  }\n     7 |});\nvalidateQuoteMarks: Invalid quote mark found at routes/main.js :\n     3 |export default Ember.Route.extend({\n     4 |  model() {\n     5 |    return Ember.$.getJSON(\"data/752MostCommonLyricWordsInDictionary.json\");\n-----------------------------------^\n     6 |  }\n     7 |});');
  });
});
define('lyricsss/tests/routes/main.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/main.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/main.js should pass jshint.');
  });
});
define('lyricsss/tests/services/team-service.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - services/team-service.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/team-service.js should pass jscs.\ndisallowDirectPropertyAccess: Avoid accessing Ember.Service directly at services/team-service.js :\n     1 |import Ember from \'ember\';\n     2 |\n     3 |export default Ember.Service.extend({\n------------------------------^\n     4 |  active: \'blue\',\n     5 |  blueScore: 0,');
  });
});
define('lyricsss/tests/services/team-service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/team-service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/team-service.js should pass jshint.');
  });
});
define('lyricsss/tests/services/timer-service.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - services/timer-service.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/timer-service.js should pass jscs.\ndisallowDirectPropertyAccess: Avoid accessing Ember.Service directly at services/timer-service.js :\n     1 |import Ember from \'ember\';\n     2 |\n     3 |export default Ember.Service.extend({\n------------------------------^\n     4 |  iconState: \'glyphicon-pause\',\n     5 |  seconds: 0,\ndisallowDirectPropertyAccess: Avoid accessing Ember.run directly at services/timer-service.js :\n    12 |    } else {\n    13 |      this.incrementProperty(\'seconds\', -1);\n    14 |      this._timer = Ember.run.later(this, \'_countdown\', 1000);\n---------------------------------^\n    15 |    }\n    16 |  },\ndisallowDirectPropertyAccess: Avoid accessing Ember.run directly at services/timer-service.js :\n    19 |  },\n    20 |  pause() {\n    21 |    Ember.run.cancel(this.get(\'_timer\'));\n-----------------^\n    22 |    this.set(\'_timer\', null);\n    23 |    this.set(\'iconState\', \'glyphicon-play\');\ndisallowDirectPropertyAccess: Avoid accessing Ember.run directly at services/timer-service.js :\n    24 |  },\n    25 |  reset() {\n    26 |    Ember.run.cancel(this.get(\'_timer\'));\n-----------------^\n    27 |    this.set(\'seconds\', this.get(\'timeLimit\') + 1);\n    28 |    this._countdown();\ndisallowTrailingComma: Extra comma following the final element of an array or object literal at services/timer-service.js :\n    40 |      this.resume();\n    41 |    }\n    42 |  },\n-----------^\n    43 |});\n    44 |');
  });
});
define('lyricsss/tests/services/timer-service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/timer-service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/timer-service.js should pass jshint.');
  });
});
define('lyricsss/tests/services/word-service.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - services/word-service.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/word-service.js should pass jscs.\ndisallowDirectPropertyAccess: Avoid accessing Ember.Service directly at services/word-service.js :\n     2 |import PastWord from \'lyricsss/models/past-word\';\n     3 |\n     4 |export default Ember.Service.extend({\n------------------------------^\n     5 |  pastWords: [],\n     6 |  upcomingWords: [],\nrequireSpacesInsideObjectBrackets: One space required after opening curly brace at services/word-service.js :\n     5 |  pastWords: [],\n     6 |  upcomingWords: [],\n     7 |  add({word, team, answerCorrect, time}) {\n---------------^\n     8 |    this.get(\'pastWords\').pushObject(PastWord.create({\n     9 |      word,\nrequireSpacesInsideObjectBrackets: One space required before closing curly brace at services/word-service.js :\n     5 |  pastWords: [],\n     6 |  upcomingWords: [],\n     7 |  add({word, team, answerCorrect, time}) {\n----------------------------------------------^\n     8 |    this.get(\'pastWords\').pushObject(PastWord.create({\n     9 |      word,');
  });
});
define('lyricsss/tests/services/word-service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/word-service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/word-service.js should pass jshint.');
  });
});
define('lyricsss/tests/test-helper', ['exports', 'lyricsss/tests/helpers/resolver', 'ember-qunit'], function (exports, _lyricsssTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_lyricsssTestsHelpersResolver['default']);
});
define('lyricsss/tests/test-helper.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - test-helper.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jscs.');
  });
});
define('lyricsss/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('lyricsss/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('lyricsss/tests/unit/routes/application-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - unit/routes/application-test.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jscs.');
  });
});
define('lyricsss/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('lyricsss/tests/unit/routes/lyrics-card-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:lyrics-card', 'Unit | Route | lyrics card', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('lyricsss/tests/unit/routes/lyrics-card-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - unit/routes/lyrics-card-test.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/lyrics-card-test.js should pass jscs.');
  });
});
define('lyricsss/tests/unit/routes/lyrics-card-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/lyrics-card-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/lyrics-card-test.js should pass jshint.');
  });
});
define('lyricsss/tests/unit/services/team-service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:team-service', 'Unit | Service | team tracking', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('lyricsss/tests/unit/services/team-service-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - unit/services/team-service-test.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/team-service-test.js should pass jscs.');
  });
});
define('lyricsss/tests/unit/services/team-service-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/team-service-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/team-service-test.js should pass jshint.');
  });
});
define('lyricsss/tests/unit/services/timer-service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:timer-service', 'Unit | Service | timer control', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('lyricsss/tests/unit/services/timer-service-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - unit/services/timer-service-test.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/timer-service-test.js should pass jscs.');
  });
});
define('lyricsss/tests/unit/services/timer-service-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/timer-service-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/timer-service-test.js should pass jshint.');
  });
});
define('lyricsss/tests/unit/services/words-service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:word-service', 'Unit | Service | word history', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('lyricsss/tests/unit/services/words-service-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSCS - unit/services/words-service-test.js');
  QUnit.test('should pass jscs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/words-service-test.js should pass jscs.');
  });
});
define('lyricsss/tests/unit/services/words-service-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/words-service-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/words-service-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('lyricsss/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
