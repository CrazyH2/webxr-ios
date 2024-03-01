 // © Copyright 2022 CrazyH
 // This file was originally made by CrazyH
 // Do not rebrand if you are distributing it
 // © Copyright 2022 CrazyH

export default class EventTarget {
    constructor() {
      this.listeners = new Map();
    };
  
    addEventListener(type, listener) {
      if(typeof type !== "string") console.error("Param 'type' needs to be a string");
      if(typeof listener !== "function") console.error("Param 'listener' needs to be a function");

      var currListeners = this.listeners.get(type) || [];
      currListeners.push(listener);
      this.listeners.set(type, currListeners);
    };
  
    dispatchEvent(type, event) {
      if(typeof type !== "string") console.error("Param 'type' needs to be a string");
      if(typeof listener !== "function") console.error("Param 'event' needs to be a object");
      
      var currListeners = Object.freeze(this.listeners.get(type) || []);

      for (const listener of currListeners) {
        listener(event);
      };

      if (typeof this["on" + type] === "function") this["on" + type](event);
    };
  
    removeEventListener(type, listener) {
      if(typeof type !== "string") console.error("Param 'type' needs to be a string");
      if(typeof listener !== "function") console.error("Param 'listener' needs to be a function");

      var currListeners = this.listeners.get(type) || [];
      delete currListeners[currListeners.indexOf(listener)];
      this.listeners.set(type, currListeners);
    };
};