"use strict";



define('lyricsss/app', ['exports', 'lyricsss/resolver', 'ember-load-initializers', 'lyricsss/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('lyricsss/components/lyrics-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    init: function init() {
      this._super.apply(this, arguments);
      this.set('someWords', this.randomize(this.get('someWords')));
      this.set('showSplashScreen', true);
      this.set('showCards', false);
    },
    splashScreenToCards: function splashScreenToCards() {
      this.set('showSplashScreen', false);
      this.set('showCards', true);
    },
    touchEnd: function touchEnd() {
      this.click();
    },
    click: function click() {
      this.splashScreenToCards();
      var aRandomLyric = this.get('someWords').pop();
      this.set('aRandomLyric', aRandomLyric);
    },
    randomize: function randomize(words) {
      return words.sort(function () {
        return Math.random() - 0.5;
      });
    }
  });
});
define('lyricsss/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('lyricsss/helpers/app-version', ['exports', 'lyricsss/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('lyricsss/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('lyricsss/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('lyricsss/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'lyricsss/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('lyricsss/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('lyricsss/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('lyricsss/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('lyricsss/initializers/export-application-global', ['exports', 'lyricsss/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('lyricsss/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('lyricsss/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('lyricsss/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("lyricsss/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('lyricsss/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('lyricsss/router', ['exports', 'lyricsss/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('main', { path: '' });
  });

  exports.default = Router;
});
define('lyricsss/routes/main', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return Ember.$.getJSON("data/752MostCommonLyricWordsInDictionary.json");
    }
  });
});
define('lyricsss/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("lyricsss/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "jQ23g8Ws", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"main\"],false],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "lyricsss/templates/application.hbs" } });
});
define("lyricsss/templates/components/lyrics-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mYwvYa0N", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"showSplashScreen\"]]],null,{\"statements\":[[6,\"div\"],[9,\"class\",\"splash-screen blue-card flex-center\"],[7],[0,\"\\n  \"],[6,\"div\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[0,\"Lyricsss\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"A deck of cards, each with a common song lyric.\"],[8],[0,\"\\n    \"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Casual\"],[8],[0,\"\\n      \"],[6,\"p\"],[7],[0,\"Try and come up with as many songs as you can for each lyric before moving on to the next one.\"],[8],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Competitive\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\" Each team has to come up with a new song before passing play to the other team. When one team doesn't come up with one in 30 seconds, the other team gets a point!\"],[8],[0,\"\\n    \"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"p\"],[7],[6,\"small\"],[7],[0,\"(click/tap to continue)\"],[8],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"showCards\"]]],null,{\"statements\":[[6,\"div\"],[9,\"class\",\"fullscreen flex-center\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"lyrics-card blue-card flex-center\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[1,[18,\"aRandomLyric\"],false],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "lyricsss/templates/components/lyrics-card.hbs" } });
});
define("lyricsss/templates/main", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "B9ePW15z", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"lyrics-card\",null,[[\"someWords\"],[[20,[\"model\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "lyricsss/templates/main.hbs" } });
});


define('lyricsss/config/environment', [], function() {
  var prefix = 'lyricsss';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("lyricsss/app")["default"].create({"name":"lyricsss","version":"0.0.0+6f23714a"});
}
//# sourceMappingURL=lyricsss.map
