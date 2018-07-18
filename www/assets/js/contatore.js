var Singleton = (function() {
  var instance;

  function createInstance() {
    var object = new Object();
    object.i = 0;
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
    piuInstance: function() {
      instance.i++;
    }
  };
})();
