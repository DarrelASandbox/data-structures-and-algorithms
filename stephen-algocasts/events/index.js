// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = { click: [], hover: [], off: [] };
  }

  // Register an event handler
  on(eventName, callback) {
    this.events[eventName]
      ? this.events[eventName].push(callback)
      : (this.events[eventName] = callback);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (const callback of this.events[eventName]) {
        callback();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;
