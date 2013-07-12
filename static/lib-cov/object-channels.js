// Generated by CoffeeScript 1.6.3
/**
* Object Channels
*
* Create EventEmitter channels.
*
* @module object-channel
* @author potanin@UD
* @constructor
*/


(function() {
  require('abstract').createModel(function(model, prototype) {
    model.use(require('eventemitter2').prototype);
    model.properties({
      noop: require('abstract').utility.noop
    });
    model.properties(this.prototype, {
      noop: require('abstract').utility.noop
    });
    model.defineInstance(function(config) {
      return this.set(config);
    });
    return module.exports = model;
  });

}).call(this);