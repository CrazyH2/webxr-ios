 // © Copyright 2022 CrazyH
 // This file was originally made by CrazyH
 // Do not rebrand if you are distributing it
 // © Copyright 2022 CrazyH

import config_defaults from "./config";
import XRSystem from "./classes/xrsystem";

export default class WebXR_iOS {
 constructor(config = {}) {
   this.config = Object.freeze(Object.assign({}, config_defaults, config));
  
   if (!('xr' in window.navigator)) this.run();
 };

 async run() {
   window.navigator.xr = new XRSystem(this.config);
 };

};
