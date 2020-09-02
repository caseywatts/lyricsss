import $ from 'jquery';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return $.getJSON("data/752MostCommonLyricWordsInDictionary.json");
  }
});
