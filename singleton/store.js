function Test() {
  this.dog = 1;
}

module.exports = exports = new Test();  // Because require caches the value assigned to module.exports, all calls to require('mongoose') will return this same instance ensuring that it is a singleton in our application